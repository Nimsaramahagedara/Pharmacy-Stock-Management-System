import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
    purchaseId:{
        type:String
    },
    skuNumber:{
        type: String,
        required: true
    },
    location:String,
    category:String,
    noOfUnits:{
        type:Number,
        required: true
    },
    boxes:{
        type:Number,
        required:true
    },
    dom:{
        type: Date,
        required: true
    },
    doe:{
        type: Date,
        required: true
    },
    batchNumber:{
        type:Number
    },
    dateOfPurchase:{
        type:Date
    },
    status:{
        type: Boolean,
        default: 1
    }
},
{
    timestamps: true
}
)

const Stock = mongoose.model('Stocks', stockSchema);

export default Stock;