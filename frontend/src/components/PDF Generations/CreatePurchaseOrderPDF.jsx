import React, { useState, useRef } from 'react'
import './CreatePurchaseOrderPdf.css'
import { Button, Table, Tag } from 'antd';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {useReactToPrint} from 'react-to-print'

const columns = [
    {
        title: 'Item Name',
        dataIndex: 'itemName',
        key: 'itemName',
    },
    {
        title: 'No. of Boxes',
        dataIndex: 'boxes',
        key: 'boxes',
    },
    {
        title: 'No. of Units',
        dataIndex: 'units',
        key: 'units',
    },
];

const dataHandler = (all)=>{

    const dataArray = all.map((item, index) => ({
        key: index.toString(),
        itemName: item.itemName,
        boxes: item.boxes,
        units: item.units,
      }));

      return dataArray

}

const CreatePurchaseOrderPDF = ({name, all}) => {

    const [date, newDate] = useState(new Date())
    const comRef = useRef();

    const printDocument = useReactToPrint({
      content: ()=> comRef.current
    })

    return (
        <div className='purchaseOrderPdfDetails'>
            <div className="createPurchaseOrderPdf" ref={comRef}>

                <div className='createPurchaseOrderPdfHeader'>
                    <div>
                        <h3 style={{ color: '#1677ff', marginBottom: '7px' }}>Envicta</h3>
                        <span>37/A, Hill Street, Dehiwala</span>
                        <span>+94 763699877</span>
                    </div>

                    <div>
                        <h4>Purchase Order</h4>
                        <h6 style={{ marginBottom: '2rem' }}>Date : {date.toLocaleDateString()}</h6>
                    </div>
                </div>

                <h4 className='text-center'>{name} (PVT) LTD</h4>

                <Table columns={columns} dataSource={dataHandler(all)} />
            </div>

            <Button type="primary" style={{ marginTop: '2rem' }} onClick={printDocument}>
                Print
            </Button>
        </div>


    )
}

export default CreatePurchaseOrderPDF