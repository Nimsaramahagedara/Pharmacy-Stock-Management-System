import express from 'express'
import { createSku, createStock, deleteStock, getAllSku, getAllStock, getStock, updateStock } from '../DAO/StockDao.js';
import { authMiddleware } from '../Middlewares/Authenticate.js';

const Stockrouter = express.Router();

Stockrouter.use(authMiddleware);

Stockrouter.get('/',getAllStock);
Stockrouter.get('/getallsku',getAllSku);
Stockrouter.get('/:id',getStock);


Stockrouter.post('/create',createStock);
Stockrouter.put('/update/:id',updateStock);
Stockrouter.delete('/:id',deleteStock);

//create new sku
Stockrouter.post('/createsku',createSku);




export default Stockrouter;