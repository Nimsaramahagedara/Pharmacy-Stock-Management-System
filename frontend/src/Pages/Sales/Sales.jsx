import React from 'react'
import { useState } from "react";
import { Typography, Form, Select, Row, Col, DatePicker, InputNumber, Button, Table, Space, Tag, Input, message, Popconfirm } from "antd";

const Sales = () => {

  const { Title } = Typography;
  const [units, setUnits] = useState(0);
  const [boxes, setBoxes] = useState(0);
  const [skuNumber, setSku] = useState(0);
  const [data, setData] = useState([]);


  //COLUMN NAMES FOR THE TABLE
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'SKU Number',
      dataIndex: 'sku',
      key: 'sku',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Number Of Units (qty)',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Boxes',
      key: 'units',
      dataIndex: 'units'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>See Detials</a>
          <Button onClick={() => removeItem(record.key)} type='link' danger> Remove</Button>
        </Space>
      ),
    },
  ];

  //ADD NEW ROW TO THE TABLE

  const handleAddDispatch = () => {
    const newItem = {
      sku: skuNumber,
      name: 'Undefined',
      qty: units,
      units: boxes
    }
    setData((prev) => [...prev, newItem])
  }


  //RESET THE TABLE DATA
  const resetOrderList = () => {
    console.log(data);
    setData([]);
  }
  const removeItem = (key) => {
    const updatedItems = data.filter((_, index) => index !== key);
    console.log('Key' + key + updatedItems);
    setData(updatedItems);
  }

  //RESET CONFIRM MESSAGE EVENTS
  const confirm = (e) => {
    console.log(e);
    resetOrderList();
    message.success('Dispatch Reset Success');
  };
  const cancel = (e) => {
    console.log(e);
    // message.error('Click on No');
  };

  const handleSubmit = ()=>{
    message.success('Dispatching Success !');
  }


  return (
    <>
      <div style={{ width: '90%', margin: '0px auto' }}>
        <Title level={3} className='text-center'>Dispatch Items</Title>
        <Row className='justify-content-between'>
          <Col span={11}>
            <Form.Item>
              <DatePicker placeholder='Current Date' style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Input showCount maxLength={20} placeholder='Address'></Input>
          </Col>

        </Row>
        <Row className='justify-content-between'>
          <Col span={6}>
            <Form.Item>
              <Select
                onChange={(value) => { setSku(value) }}
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
                    label: 'SKU1',
                  },
                  {
                    value: '2',
                    label: 'SKU2',
                  }
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item>
              <InputNumber placeholder='Number Of Boxes' style={{ width: '100%' }} onChange={(value) => { setBoxes(value) }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <InputNumber placeholder='Number Of Units (Optional)' style={{ width: '100%' }} onChange={(value) => { setUnits(value) }} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Button type='primary' block onClick={handleAddDispatch}>Add</Button>
          </Col>

        </Row>
      </div>
      <div className="order-list position-relative">
        <Row className='justify-content-between'>
          <Title level={5}>Order Details</Title>
          <Popconfirm
            title="Reset Dispatch"
            description="Are you sure to Reset Dispatch ?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type='link'>Reset</Button>
          </Popconfirm>
        </Row>
        <div className="table-container" style={
          {
            maxHeight:'40vh',
            overflow:'scroll',
            scroll:'hidden'
          }
        }>
          <Table columns={columns} dataSource={data.map((item, index) => ({ ...item, key: index }))} />
        </div>
        <Button type='primary' style={{background:'green', right:'5%'}} className='position-absolute mt-4' onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  )
}

export default Sales