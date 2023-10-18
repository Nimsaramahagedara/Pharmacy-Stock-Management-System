import React, { useState } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import axios from 'axios';
import authAxios from '../utils/authAxios';



//`stock/createsku`
const CreateSupplier = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [supplierName, setSupplierName] = useState('');
  const [contactNo, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [supplierId, setSupplierId] = useState('');
  const [email, setEmail] = useState('');


  const baseUrl = process.env.REACT_APP_BASE_URL


  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    setConfirmLoading(true);
    const data = {
        Id:'',
        supplierName: supplierName,
        address: address,
        contact: contactNo,
        email:email,
    }
    try {
      const result = await authAxios.post(`/supplier/create`, data)
      if (result) {
        setConfirmLoading(false)
        message.success('New Supplier Added !!')
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
        New Supplier ?
      </Button>
      <Modal
        title="Create New Supplier"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          <Form.Item>
            <Input placeholder='Supplier Name' onChange={e=> setSupplierName(e.target.value)} value={supplierName} />
          </Form.Item>
          <Form.Item>
            <Input placeholder='Address' onChange={e=>setAddress(e.target.value)} value={address} />
          </Form.Item>
          <Form.Item>
            <Input placeholder='Contact' type='number' onChange={e=>setContact(e.target.value)} value={contactNo} />
          </Form.Item>
          <Form.Item>
            <Input placeholder='email' type='email' onChange={e=>setEmail(e.target.value)} value={email} />
          </Form.Item>
        </div>
      </Modal>
    </>
  );
};
export default CreateSupplier;