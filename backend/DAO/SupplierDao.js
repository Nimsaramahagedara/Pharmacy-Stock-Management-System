import Supplier from "../Models/SupplierModel.js"
import { generateUniqueId } from "../Utils/generateID.js";

//FETCH LAST DOCUMENT
const fetchLastDocument = async ()=>{
    try {
        // Find the last documents
        const lastDocument = await Supplier.find()
          .sort({ createdAt: -1 }) // Sort in descending order based on createdAt field
          .limit(1);
    
        if (lastDocument) {
          // You can access the last document's data here
          return lastDocument

        } else {
          console.log('No document found with the specified purchaseId.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
}
//CREATE Supplier
export const createSupplier =async (req, res)=>{
    try {
        const lastDoc =await fetchLastDocument();
        req.body.Id = await generateUniqueId('SUP',lastDoc);

        const newSupplier = await Supplier.create(req.body);
        res.status(200).json(newSupplier);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}

//GET ALL Supplier
export const getAllSupplier = async(req,res)=>{
    try {
        const allSupplier = await Supplier.find();
        res.status(200).json(allSupplier)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//GET SPECIFIC Supplier
export const getSupplier = async(req,res)=>{
     const {id} = req.params;
     try {
         const supplier = await Supplier.findById(id);
         res.status(200).json(supplier)
         
     } catch (error) {
         res.status(500).json({error:error.message})
     }
 }

 //UPDATE Supplier
export const updateSupplier =async (req, res)=>{
    const {id} = req.params;
    const currSupplier = await Supplier.findById(id);
    if(!currSupplier){
        res.status(500).json({error:"Supplier not Exist"});
    }

    try {
        const updatedSupplier = req.body;
        const newSupplier = await Supplier.findByIdAndUpdate(id,updatedSupplier);
        res.status(200).json(newSupplier);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}

 //DELETE Supplier
 export const deleteSupplier =async (req, res)=>{
    const {id} = req.params;
    const currSupplier = await Supplier.findById(id);
    if(!currSupplier){
        res.status(500).json({error:"Supplier not Exist"});
    }

    try {
        const deletedSupplier = await Supplier.findByIdAndDelete(id);
        res.status(200).json(deletedSupplier);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}
