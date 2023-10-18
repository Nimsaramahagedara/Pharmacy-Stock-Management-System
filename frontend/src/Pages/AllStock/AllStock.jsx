import React, { useState, useEffect } from 'react'
import { MDBDataTable } from "mdbreact";
import StockCountBox from '../../components/StockCountBox';
import { useLocation } from 'react-router-dom';
import authAxios from '../../utils/authAxios';



const AllStock = () => {
  const [tableContent , setTableContent] = useState([])
  const [varients , setVarients] = useState(0);
  const [outOfStock , setOutOfStock]= useState(0);
  const [expiredItem , setExpiredItem] = useState(0);
  const [damagedItem, setDamaged] = useState(0);
  const location = useLocation();

  //Create an instance from createAuthAxios

  const getAllStock =async () => {

    try {
      const all = await authAxios.get(`/stock`)
      setTableContent(all.data);  
      setVarients(all.data.length);
      console.log('Table data in Function : ');
      console.log( all.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      getAllStock();
  }, []);


  const columnData = [
    {
      label: "Purchase ID",
      field: "purchaseId",
      sort: "asc",
      width: 250,
    },
    {
      label: "Packing Slip ID",
      field: "packingid",
      sort: "asc",
      width: 250,
    },
    {
      label: "SKU number",
      field: "skuNumber",
      sort: "asc",
      width: 150,
    },
    {
      label: "Item Name",
      field: "itemName",
      sort: "asc",
      width: 200,
    },
    {
      label: "Category",
      field: "category",
      sort: "asc",
      width: 200,
    },
    // {
    //   label: "Location",
    //   field: "location",
    //   sort: "asc",
    //   width: 200,
    // },
    {
      label: "No. of boxes",
      field: "boxes",
      sort: "asc",
      width: 130,
    },
    {
      label: "No. of Units",
      field: "noOfUnits",
      sort: "asc",
      width: 130,
    },
    {
      label: "Manufacture",
      field: "dom",
      sort: "asc",
      width: 100,
    },
    {
      label: "Expiry",
      field: "doe",
      sort: "asc",
      width: 100,
    },
    {
      label: "Supplier ID",
      field: "to",
      sort: "supplierId",
      width: 130,
    },
    {
      label: "Batch Number",
      field: "batchNumber",
      sort: "asc",
      width: 150,
    },
    {
      label: "Purchase Date",
      field: "dateOfPurchase",
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


  return (
    <div className="allBookings">
      <div className='d-flex justify-content-around mb-3'>
        <StockCountBox count={varients} title={'Varients'} />
        <StockCountBox count={outOfStock} title={'Out Of Stock'} />
        <StockCountBox count={expiredItem} title={'Expired Items'} />
        <StockCountBox count={damagedItem} title={'Damaged Items'} />
      </div>
      <h3>All Stocks</h3>
      <MDBDataTable scrollX striped bordered data={{ columns: columnData, rows: tableContent }} maxHeight="200px" />
    </div>
  );
}

export default AllStock