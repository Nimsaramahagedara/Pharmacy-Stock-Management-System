import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
    name:{
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
    typesOfDrugs:{
        type: Array
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

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;