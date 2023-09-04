import Supplier from "../Models/SupplierModel.js"


//CREATE Supplier
export const createSupplier =async (req, res)=>{
    try {
        const supplier = req.body;
        const newSupplier = await Supplier.create(supplier);
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
