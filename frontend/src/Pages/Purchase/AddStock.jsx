import { PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import StockTable from '../../components/StockTable';
import CreateSKUModel from '../../components/CreateSKUModel';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Typography,
  Row,
  Col,
  message
} from 'antd';
import authAxios from '../../utils/authAxios';
import CreateSupplier from '../../components/CreateSupplier';
import axios from 'axios';
import { getAllSku, getAllSupplier } from '../../utils/Functions';

const { Title } = Typography;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const AddStock = () => {
  const [allSku, setAllSku] = useState([0]);
  const [allSuppliers, setAllSuppliers] = useState([0]);

  const [supplierId, setSupplierId] = useState(null);
  const [packingId, setPackingId] = useState('');
  const [sku, setSku] = useState(null);
  const [noOfBoxes, setNoOfBoxes] = useState('');
  const [noOfUnits, setNoOfUnits] = useState('');
  const [MFD, setMfd] = useState('');
  const [EXP, setExp] = useState('');
  const [batchNo, setBatchNo] = useState('')
  const [purchaseDate, setPurchaseDate] = useState('');

  const [tableContent, setTableContent] = useState([]);

  const isCompleted = () => {

  }


  useEffect( () => {
    const setData = async ()=>{
      const skus = await getAllSku(); 
      const sups = await getAllSupplier();

      setAllSku(skus);
      setAllSuppliers(sups);
    }
    setData();

  }, [isCompleted]);

  // Function to format the date using the Date object
  const formatDate = (date) => {
    if (date instanceof Date) {
      // Format the date as desired (e.g., YYYY-MM-DD)
      const formattedDate = date.toISOString().split('T')[0];
      return formattedDate;
    }
    return '';
  };
  const handleSubmit = async () => {

    const data = {
      Id: '',
      supplierId: supplierId,
      packingId: packingId,
      skuNumber: sku,
      boxes: noOfBoxes,
      noOfUnits: noOfUnits,
      dom: formatDate(MFD.$d),
      doe: formatDate(EXP.$d),
      batchNumber: batchNo,
      dateOfPurchase: formatDate(purchaseDate.$d),
      status: 1
    };
    console.log(data);
    setTableContent((prev) => [...prev, data]);
    console.log(tableContent);

    try {
      const result = await authAxios.post('/stock/create', data);
      if (result) {
        message.success('Product Added successfully ! ')
      }
    } catch (error) {
      if (error.response) {
        // Handle errors with a response from the server
        message.error('Error: ' + error.response.data.error);
      } else if (error.request) {
        // Handle network errors (no response received)
        message.error('Network error: Unable to reach the server.');
      } else {
        // Handle other errors
        message.error('An error occurred: ' + error.message);
      }
    }
  }



  return (
    <>
      <div style={{ width: '90%', margin: '0px auto' }}>
        <Title level={3} className='text-center'>Add Stock</Title>
        <Form.Item>
          <Select
            // Bind the value prop to the supplierId state variable
            value={supplierId}
            // Set the onChange prop to the handleSupplierChange function
            onChange={setSupplierId}
            name='supplierId'
            showSearch
            placeholder="Supplier ID"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())

            }
            options={allSuppliers.map((result) => ({
              value: result._id,
              label: result.supplierId + ' ' + result.supplierName,
            }))}
          />
        </Form.Item>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <Input placeholder='Packing Slip Id' name='packingId' onChange={e => setPackingId(e.target.value)} value={packingId} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <Select
                name='sku'
                // Bind the value prop to the supplierId state variable
                value={sku}
                // Set the onChange prop to the handleSupplierChange function
                onChange={setSku}
                showSearch
                placeholder="SKU Number"
                optionFilterProp="children"
                dropdownClassName="scrollable-dropdown"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={allSku.map((result) => ({
                  value: result._id,
                  label: result.sku + ' ' + result.name,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <InputNumber name='noOfBoxes' placeholder='Number Of Boxes' style={{ width: '100%' }} onChange={setNoOfBoxes} value={noOfBoxes} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item >
              <InputNumber name='noOfUnits' placeholder='Number Of Units' style={{ width: '100%' }} onChange={setNoOfUnits} value={noOfUnits} />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <DatePicker name='MFD' style={{ width: '100%' }} placeholder='Manufactured Date' onChange={setMfd} value={MFD} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <DatePicker name='EXP' placeholder='Expiry Date' style={{ width: '100%' }} onChange={setExp} value={EXP} />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <InputNumber name='batchNo' placeholder='Batch Number' style={{ width: '100%' }} onChange={setBatchNo} value={batchNo} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <DatePicker name='purchaseDate' placeholder='Purchase Date' style={{ width: '100%' }} onChange={setPurchaseDate} value={purchaseDate} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Document / Slip
              </div>
            </div>
          </Upload>
        </Form.Item>
        <div className="d-flex w-100 justify-content-between">
          <div className="col-6">
            <Button type="primary" htmlType="submit" className='mb-0' onClick={handleSubmit}>Add To The Stock </Button>
          </div>
          <div className="col-4">
            <CreateSKUModel isCompleted={isCompleted} />
            <CreateSupplier isCompleted={isCompleted} />
          </div>
        </div>
      </div>
      <hr className='bg-dark' />
      <StockTable tableContent={tableContent} />

    </>
  );
};
const AddStockPage = () => <AddStock />
export default AddStockPage;