import AdminModel from "../Models/AdminModel.js";
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'

const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET, {expiresIn:'3d'})
}

// Register Admin
export const registerAdmin = async(req,res)=>{
    const{username, password} = req.body
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)

    try{
        if(password.length<6){
            throw Error('Password must be minimum 6 characters')
        }else{
        const admin = await AdminModel.create({username, password:hash})
        const token = createToken(admin._id)
        res.status(200).json({admin, token})
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

// login admin
export const loginAdmin = async(req,res)=>{
    const{username,password} = req.body

    try{
        if(!username || !password){
            throw Error('*Please fill all the fields!')
        }

        const admin = await AdminModel.findOne({username})

        if(!admin){
            throw Error('*Username Incorrect!')
        }
        
        const match = await bcrypt.compare(password,admin.password)
        if(!match){
            console.log('Password inconrect');
            throw Error('*Password is incorrect!')
        }else{
            const token = createToken(admin._id)
            res.status(200).json({admin,token})
        }
    }catch(error){
        res.status(401).json({error:error.message})
    }
}

// Update Admin
export const updateAdmin = async(req,res)=>{
    const id = req.params.id
    const{username, password, image} = req.body

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)

    try{
        if(password.length<6){
            throw Error('Password must be 6 digits or greater')
        }else{
        const admin = await AdminModel.findByIdAndUpdate(id, {username,password:hash, image}, {new:true})
        res.status(200).json('Updated Successfully!')
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
