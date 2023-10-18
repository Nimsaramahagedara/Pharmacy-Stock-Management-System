import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
    Id:{
        type: String,
        required: true
    },
    supplierName:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type: String
    },
},
{
    timestamps: true
}
)

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;