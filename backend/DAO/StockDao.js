import SKU from "../Models/SKU.js";
import Stock from "../Models/StockModel.js"
import { generateUniqueId } from "../Utils/generateID.js";


//FETCH LAST STOCK DOCUMENT
const fetchLastDocument = async () => {
    try {
        // Find the last documents
        const lastDocument = await Stock.find()
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



//CREATE STOCK
export const createStock = async (req, res) => {
    try {
        const lastDoc = await fetchLastDocument();
        // Generate the purchase ID
        const purchaseId = await generateUniqueId('PURC', lastDoc)

        // Add the generated purchase ID to the request body
        req.body.Id = purchaseId;

        const stock = req.body;
        const newStock = await Stock.create(stock);
        res.status(200).json(newStock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

//GET ALL STOCK
export const getAllStock = async (req, res) => {
    try {
        const allStock = await Stock.find();
        res.status(200).json(allStock)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//GET SPECIFIC STOCK
export const getStock = async (req, res) => {
    const { id } = req.params;
    try {
        const stock = await Stock.findById(id);
        res.status(200).json(stock)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//UPDATE STOCK
export const updateStock = async (req, res) => {
    const { id } = req.params;
    const currStock = await Stock.findById(id);
    if (!currStock) {
        res.status(500).json({ error: "Stock not Exist" });
    }

    try {
        const updatedStock = req.body;
        const newStock = await Stock.findByIdAndUpdate(id, updatedStock);
        res.status(200).json(newStock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

//DELETE STOCK
export const deleteStock = async (req, res) => {
    const { id } = req.params;
    const currStock = await Stock.findById(id);
    if (!currStock) {
        res.status(500).json({ error: "Stock not Exist" });
    }

    try {
        const deletedStock = await Stock.findByIdAndDelete(id);
        res.status(200).json(deletedStock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

//CREATE SKU
export const createSku = async (req, res) => {
    try {
        const sku = req.body;
        await SKU.create(sku).then((savedSKU) => res.status(200).json(savedSKU)).catch((error) => { res.status(500).json({ error: 'Duplicate SKU' }); })
        //res.status(200).json(newSku);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
//GET ALL SKU

export const getAllSku = async (req, res) => {
    try {
        const allStock = await SKU.find();
        res.status(200).json(allStock)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}