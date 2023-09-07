import mongoose from 'mongoose'

const SkuSchema = mongoose.Schema({
    sku:{
        type:String,
        required:true,
        unique: true,
    },
    name:{
        type:String,
        required:true
    }
},
    {timestamps:true}
)

// Create the unique index
SkuSchema.index({ sku: 1 }, { unique: true });

const SKU = mongoose.model('Sku', SkuSchema)
export default SKU