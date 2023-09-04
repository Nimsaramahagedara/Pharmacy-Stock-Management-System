import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './Layout/DashboardLayout'
import './App.css'
import AllStock from './Pages/AllStock/AllStock'
import PurchaseReturns from './Pages/ExpiryReturns/PurchaseReturns'
import DNotes from './Pages/Documents/DNotes'
import Invoice from './Pages/Documents/Invoice'
import Order from './Pages/Documents/Order'
import RcdNotes from './Pages/Documents/RcdNotes'
import Slip from './Pages/Documents/Slip'
import DmgPurchase from './Pages/DamagedReturns/DmgPurchase'
import DmgSales from './Pages/DamagedReturns/DmgSales'
import RetSales from './Pages/ExpiryReturns/RetSales'
import Sales from './Pages/Sales/Sales'
import AddStock from './Pages/Purchase/AddStock'
import CreatePurchaseOrder from './Pages/Purchase/CreatePurchaseOrder'
import Login from './Pages/Login/Login'
import PreLoader from './components/Preloader'
import NotFound from './Pages/ErrorPages/NotFound'



const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  // Simulate an async operation (e.g., fetching data) with a delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulating 2 seconds delay
  }, []);

  if (isLoading) {
    return <PreLoader />; // Render the preloader while loading
  }

  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='login' element={<Login />} />
      <Route path='/' element={<DashboardLayout/>}>
        <Route path='' index element={<AllStock />} />
        <Route path='addStock' element={<AddStock />} />
        <Route path='purchaseOrder' element={<CreatePurchaseOrder />} />
        <Route path='purchaseReturn' element={<PurchaseReturns />} />
        <Route path='dnotes' element={<DNotes />} />
        <Route path='invoice' element={<Invoice/>} />
        <Route path='order' element={<Order />} />
        <Route path='rcdnotes' element={<RcdNotes />} />
        <Route path='packingslip' element={<Slip />} />
        <Route path='dmgpurchase' element={<DmgPurchase />} />
        <Route path='dmgretsales' element={<DmgSales />} />
        <Route path='retsales' element={<RetSales />} />
        <Route path='sales' element={<Sales />} />
      </Route>
    </Routes>
  )
}

export default App