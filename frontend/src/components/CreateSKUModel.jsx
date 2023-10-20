import React, { useState } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import axios from 'axios';
import authAxios from '../utils/authAxios';



//`stock/createsku`
const CreateSKUModel = ({isCompleted}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const baseUrl = process.env.REACT_APP_BASE_URL


  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    setConfirmLoading(true);
    const data = {
      sku: sku,
      name: name
    }
    try {
      const result = await authAxios.post(`/stock/createsku`, data)
      if (result) {
        setConfirmLoading(false)
        message.success('New SKU Created !!')
        isCompleted();
      }

    } catch (error) {
      message.error(error.response.data.error);
    }
    setConfirmLoading(false)
    setOpen(false);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Button type="link" onClick={showModal}>
        New SKU ?
      </Button>
      <Modal
        title="Add new Product with SKU"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          <Form.Item>
            <Input placeholder='SKU Number' onChange={e => setSku(e.target.value)} value={sku} />
          </Form.Item>
          <Form.Item>
            <Input placeholder='Product Name' onChange={e => setName(e.target.value)} value={name} />
          </Form.Item>
        </div>
      </Modal>
    </>
  );
};
export default CreateSKUModel;