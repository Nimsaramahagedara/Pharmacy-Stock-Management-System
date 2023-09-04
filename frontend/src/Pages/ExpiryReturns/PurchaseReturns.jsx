import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import StockTable from '../../components/StockTable';

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


const PurchaseReturns = () => {

  return (
    <>
      <div style={{ width: '90%', margin: '0px auto' }}>
        <Title level={3} className='text-center' type='danger'>Return Expired Items</Title>
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
              <Input placeholder='Batch Number' />
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

        {/* <Row className='justify-content-between'>
          <Col span={11}>
            <Form.Item>
              <DatePicker placeholder='Expiry Date' style={{ width: '100%' }}/>
            </Form.Item>
          </Col>
        </Row>

        <Row className='justify-content-between'>
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
        </Form.Item> */}
        <div className="d-flex w-100 justify-content-between">
          <Button type="primary" htmlType="submit" className='mb-0'>Return Items</Button>
        </div>
      </div>
      <hr className='bg-dark' />
      <StockTable />
      
    </>
  );
};

export default  PurchaseReturns;