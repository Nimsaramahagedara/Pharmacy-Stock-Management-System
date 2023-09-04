import mongoose from "mongoose";
import express from 'express'
import dotenv from 'dotenv'
import Stockrouter from "./Routes/StockRoutes.js";
import morgan from "morgan";
import SupplierRouter from "./Routes/SupplierRoutes.js";
import Admin from './Routes/AdminRoute.js'
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(morgan('dev'));

dotenv.config()
app.use(cors());
mongoose.connect(process.env.DB, {
    useNewUrlParser:true
})
.then(()=>app.listen(process.env.PORT, ()=>console.log(`Listening at ${process.env.PORT}`)))
.catch((err)=>console.log(err))

app.use('/stock', Stockrouter);
app.use('/supplier', SupplierRouter);
app.use('/admin',Admin)
