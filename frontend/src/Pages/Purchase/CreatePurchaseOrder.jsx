import React, {useState, useEffect} from 'react'
import './CreatePurchaseOrder.css'
import { Button, Select, Input, InputNumber } from 'antd';
import CreatePurchaseOrderPDF from '../../components/PDF Generations/CreatePurchaseOrderPDF';

const CreatePurchaseOrder = () => {

  const[allItems,setAllItems] = useState([])
  const[companyName,setCompanyName] = useState('')
  const[item, setItem] = useState('')
  const[boxes, setBoxes] = useState('')
  const[units, setUnits] = useState('')

  console.log(boxes)

  const handleCompanyName = (value)=>{
    setCompanyName(value)
  }

  const handleSelectChange = (value)=>{
    setItem(value)
  }

  const handlePurchaseOrder = (e)=>{
    e.preventDefault()

    const newItem = {
      itemName:item,
      boxes:boxes,
      units:units
    }

    setAllItems((prevItems)=>[...prevItems, newItem]);
  }

  useEffect(() => {
    console.log(allItems); // Log the updated state in the effect
  }, [allItems]);


  return (
    <div className="createPurchaseOrderContents">
      <form className="insertForm" onSubmit = {handlePurchaseOrder}>

        <Select
          showSearch
          style={{
            width: '50%',
          }}
          placeholder="Select Supplier"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }

          onChange = {handleCompanyName}

          options={[
            {
              value: 'Envicta Pharmacy',
              label: 'Envicta Pharmacy',
            },
            {
              value: '2',
              label: 'Closed',
            }
          ]}
        />


        <div className="CreatePurchaseInputs">
          <Select
            showSearch
            style={{
              width: '70%',
            }}
            placeholder="Select Item"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }

            onChange={handleSelectChange}

            options={[
              {
                value: '1',
                label: 'Not Identified',
              },
              {
                value: '2',
                label: 'Closed',
              }
            ]}
          />
          <InputNumber placeholder='No of Boxes' style={{ width: '50%' }} onChange={(value) => setBoxes(value)}/>
          <InputNumber placeholder='No of Units (optional)' style={{ width: '50%' }} onChange={(value) => setUnits(value)}/>

          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </div>
        
        {/* Display and PDF part */}
        <CreatePurchaseOrderPDF 
          name = {companyName}
          all = {allItems}
        />

      </form>
    </div>
  )
}

export default CreatePurchaseOrder