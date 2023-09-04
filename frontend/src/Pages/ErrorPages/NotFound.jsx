import React from 'react';
import NotFoundImage from '../../images/404.svg';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
const navigate = useNavigate();
const handleNavigate = ()=>{
    navigate('/')
}

  return (
    <div className='w-100 text-center position-relative d-flex flex-column align-items-center justify-content-center' style={{marginTop:'15vh'}}>
        <div className='mt-5'>
            <img src={NotFoundImage} alt="404 Not Found" className='w-50'/>
            <h6 className=''>404 NOT FOUND</h6>
            <Button type='primary' className='mb-4 mt-3' onClick={handleNavigate}>Go Back</Button>
        </div>
    </div>
  )
}

export default NotFound