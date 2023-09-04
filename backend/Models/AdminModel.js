import mongoose from 'mongoose'

const AdminSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:String
},
    {timestamps:true}
)

const AdminModel = mongoose.model('Admin', AdminSchema)
export default AdminModel