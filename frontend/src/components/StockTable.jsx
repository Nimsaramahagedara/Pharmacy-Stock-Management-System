import React, { useEffect, useState } from 'react'
import { MDBDataTable } from "mdbreact";
import Typography from 'antd/es/typography/Typography';


const StockTable = () => {
    const [tableData, setTableData] = useState();
    const { Title } = Typography;

  const columnData = [
    {
      label: "Purchase ID",
      field: "id",
      sort: "asc",
      width: 250,
    },
    {
      label: "Packing Slip ID",
      field: "id",
      sort: "asc",
      width: 250,
    },
    {
      label: "SKU number",
      field: "email",
      sort: "asc",
      width: 150,
    },
    {
      label: "Item Name",
      field: "touristEmail",
      sort: "asc",
      width: 200,
    },
    {
      label: "Category",
      field: "touristEmail",
      sort: "asc",
      width: 200,
    },
    {
      label: "Location",
      field: "touristEmail",
      sort: "asc",
      width: 200,
    },
    {
      label: "No. of boxes",
      field: "contact",
      sort: "asc",
      width: 130,
    },
    {
      label: "No. of Units",
      field: "tourDestination",
      sort: "asc",
      width: 130,
    },
    {
      label: "Manufacture",
      field: "pickupDestination",
      sort: "asc",
      width: 100,
    },
    {
      label: "Expiry",
      field: "from",
      sort: "asc",
      width: 100,
    },
    {
      label: "Supplier ID",
      field: "to",
      sort: "asc",
      width: 130,
    },
    {
      label: "Batch Number",
      field: "time",
      sort: "asc",
      width: 150,
    },
    {
      label: "Purchase Date",
      field: "status",
      sort: "asc",
      width: 150,
    },
    {
      label: "Actions",
      field: "actions",
      sort: "asc",
      width: 130,
    },
  ];

  useEffect(()=>{
    setTableData({
      columns: columnData,
    });
  },[])

  return (
    <div className='mt-4'>
        <Title level={5}>Recently Added</Title>
       <MDBDataTable scrollX striped bordered data={tableData} maxHeight="200px"/> 
    </div>
    
  )
}

export default StockTable