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
import axios, { all } from 'axios';
import authAxios from '../../utils/authAxios';

//import { createAuthAxios } from '../../utils/CreateAuthAxios';




const { Title } = Typography;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const AddStock = () => {
  const [allSku, setAllSku] = useState([0]);

  const [supplierId, setSupplierId] = useState('');
  const [packingId, setPackingId] = useState('');
  const [sku , setSku] = useState('');
  const [noOfBoxes , setNoOfBoxes] = useState('');
  const [noOfUnits, setNoOfUnits] = useState('');
  const [MFD , setMfd] = useState('');
  const [EXP , setExp] = useState('');
  const [batchNo , setBatchNo] = useState('')
  const [purchaseDate, setPurchaseDate] = useState('');

  const getAllSku = async () => {
      try {
       const result =  await authAxios.get(`/stock/getallsku`);
       setAllSku(result.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      // Call the getAllSku function when the component mounts
      getAllSku();
      console.log(allSku);
    }, []);

  const handleSubmit =async ()=>{
    
  const data = {
    purchaseId: '',
    supplierId: supplierId,
    packingId: packingId,
    skuNumber: sku,
    boxes: noOfBoxes,
    noOfUnits: noOfUnits,
    dom: MFD,
    doe: EXP,
    batchNumber: batchNo,
    dateOfPurchase: purchaseDate,
    status: 1
  };
    console.log(data);
    const result = await authAxios.post('/stock/create',data);
    if(result){
      message.success('Product Added successfully ! ')
    }
    console.log(result);
  }

  return (
    <>
      <div style={{ width: '90%', margin: '0px auto' }}>
        <Title level={3} className='text-center'>Add Stock</Title>
        <Form.Item>
          <Select
          onChange={e=>setSupplierId(e.target.value)}
            name ='supplierId'      
            showSearch
            placeholder="Supplier ID"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Supplier 01',
              },
              {
                value: '2',
                label: 'Supplier 02',
              },
              {
                value: '3',
                label: 'Supplier 03',
              },
              {
                value: '4',
                label: 'Supplier 04',
              },
              {
                value: '5',
                label: 'Supplier 05',
              },
              {
                value: '6',
                label: 'Supplier 06',
              },
            ]}
          />
        </Form.Item>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <Input placeholder='Packing Slip Id'  name='packingId'/>
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <Select
              name = 'sku'
              
                showSearch
                placeholder="SKU Number"
                optionFilterProp="children"
                dropdownClassName="scrollable-dropdown"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options = {allSku.map((result) => ({
                  value: result._id,
                  label: result.sku,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <InputNumber name='noOfBoxes'  placeholder='Number Of Boxes' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item >
              <InputNumber name='noOfUnits'  placeholder='Number Of Units' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <DatePicker name='MFD'  style={{ width: '100%' }} placeholder='Manufactured Date' />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <DatePicker name='EXP'  placeholder='Expiry Date' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <InputNumber name='batchNo'  placeholder='Batch Number' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <DatePicker name='purchaseDate'  placeholder='Purchase Date' style={{ width: '100%' }} />
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
          <Button type="primary" htmlType="submit" className='mb-0' onClick={handleSubmit}>Add To The Stock </Button>
          <CreateSKUModel/>
        </div>
      </div>
      <hr className='bg-dark' />
      <StockTable />
      
    </>
  );
};
const AddStockPage= () => <AddStock />
export default  AddStockPage;