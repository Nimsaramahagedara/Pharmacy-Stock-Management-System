import { Typography } from 'antd'
import React from 'react'

const StockCountBox = ({count, title}) => {
    const {Title} = Typography;
  return (
    <div className=' rounded px-3 py-1 shadow-sm' style={{width:'24%', backgroundColor: 'var(--antd-primary-color)'}}>
       <Title level={5}>{title}</Title>
       <hr />
       <Title level={3} className='text-center'>{count}</Title>
    </div>
  )
}

export default StockCountBox