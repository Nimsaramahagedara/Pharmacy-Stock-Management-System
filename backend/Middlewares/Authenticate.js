import jwt from "jsonwebtoken";
import AdminModel from '../Models/AdminModel.js';

export const authMiddleware = async (req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
        try{
           if(token){
            const decoded = jwt.verify(token, process.env.SECRET);
            const admin = await AdminModel.findById(decoded?.id);
            req.admin = admin;
            next();
           }
        }catch(err){
            res.status(500).json({error: "Authorized token expired. Please login again."})
        }
    }else{
        res.status(500).json({error: "There is no token attached to header"})
    }
};