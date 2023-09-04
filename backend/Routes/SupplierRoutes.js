import express from 'express'
import { createSupplier, deleteSupplier, getAllSupplier, getSupplier, updateSupplier } from '../DAO/SupplierDao.js';

const SupplierRouter = express.Router();

SupplierRouter.get('/',getAllSupplier);
SupplierRouter.get('/:id',getSupplier);
SupplierRouter.post('/create',createSupplier);
SupplierRouter.put('/update/:id',updateSupplier);
SupplierRouter.delete('/:id',deleteSupplier);



export default SupplierRouter;