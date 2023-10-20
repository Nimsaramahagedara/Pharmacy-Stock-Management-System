import { Card, Typography, theme } from 'antd'
import React from 'react'

const StockCountBox = ({ count, title, bgColor }) => {
  const { Title } = Typography;
  const cardStyle = {
    width: '23%',
    backgroundColor: bgColor, // desired background color
    minWidth:'200px'
  };

  return (
    <Card title={title} style={cardStyle}>
      <Title level={3} className='text-center'>{count}</Title>
    </Card>
  );
};

export default StockCountBox