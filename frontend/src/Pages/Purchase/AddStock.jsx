import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
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
  Col
} from 'antd';



const { Title } = Typography;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const AddStock = () => {

  return (
    <>
      <div style={{ width: '90%', margin: '0px auto' }}>
        <Title level={3} className='text-center'>Add Stock</Title>
        <Form.Item>
          <Select
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
                label: 'Not Identified',
              },
              {
                value: '2',
                label: 'Closed',
              },
              {
                value: '3',
                label: 'Communicated',
              },
              {
                value: '4',
                label: 'Identified',
              },
              {
                value: '5',
                label: 'Resolved',
              },
              {
                value: '6',
                label: 'Cancelled',
              },
            ]}
          />
        </Form.Item>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <Input placeholder='Packing Slip Id' />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <Select
                showSearch
                placeholder="SKU Number"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                  {
                    value: '1',
                    label: 'Not Identified',
                  },
                  {
                    value: '2',
                    label: 'Closed',
                  },
                  {
                    value: '3',
                    label: 'Communicated',
                  },
                  {
                    value: '4',
                    label: 'Identified',
                  },
                  {
                    value: '5',
                    label: 'Resolved',
                  },
                  {
                    value: '6',
                    label: 'Cancelled',
                  },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <InputNumber placeholder='Number Of Boxes' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item >
              <InputNumber placeholder='Number Of Units' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <DatePicker style={{ width: '100%' }} placeholder='Manufactured Date' />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <DatePicker placeholder='Expiry Date' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
          <Col span={12}>
            <Form.Item>
              <InputNumber placeholder='Batch Number' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item>
              <DatePicker placeholder='Purchase Date' style={{ width: '100%' }} />
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
          <Button type="primary" htmlType="submit" className='mb-0'>Add To The Stock </Button>
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