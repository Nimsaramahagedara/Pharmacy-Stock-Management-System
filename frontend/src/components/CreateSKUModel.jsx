import React, { useState } from 'react';
import {Form,Input, Button, Modal } from 'antd';


const CreateSKUModel = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
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
              <Input placeholder='SKU Number' />
        </Form.Item>
        <Form.Item>
              <Input placeholder='Product Name' />
        </Form.Item>
        </div>
      </Modal>
    </>
  );
};
export default CreateSKUModel;