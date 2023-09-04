import Stock from "../Models/StockModel.js"


//CREATE STOCK
export const createStock =async (req, res)=>{
    try {
        const stock = req.body;
        const newStock = await Stock.create(stock);
        res.status(200).json(newStock);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}

//GET ALL STOCK
export const getAllStock = async(req,res)=>{
    try {
        const allStock = await Stock.find();
        res.status(200).json(allStock)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//GET SPECIFIC STOCK
export const getStock = async(req,res)=>{
     const {id} = req.params;
     try {
         const stock = await Stock.findById(id);
         res.status(200).json(stock)
         
     } catch (error) {
         res.status(500).json({error:error.message})
     }
 }

 //UPDATE STOCK
export const updateStock =async (req, res)=>{
    const {id} = req.params;
    const currStock = await Stock.findById(id);
    if(!currStock){
        res.status(500).json({error:"Stock not Exist"});
    }

    try {
        const updatedStock = req.body;
        const newStock = await Stock.findByIdAndUpdate(id,updatedStock);
        res.status(200).json(newStock);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}

 //DELETE STOCK
 export const deleteStock =async (req, res)=>{
    const {id} = req.params;
    const currStock = await Stock.findById(id);
    if(!currStock){
        res.status(500).json({error:"Stock not Exist"});
    }

    try {
        const deletedStock = await Stock.findByIdAndDelete(id);
        res.status(200).json(deletedStock);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}
