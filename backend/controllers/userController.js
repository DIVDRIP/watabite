import bcrypt, { genSalt } from "bcrypt"
import userModel from "../models/userModel.js";
import validator from "validator"
import jwt from "jsonwebtoken"

const createToken = (id)=>{
return jwt.sign({id},process.env.JWT_SECRET_KEY)
}

// user registration
const userSignup = async(req,res)=>{

    try {

        const {name,email,password} = req.body

        // checking user already exists or not
        const exists = await userModel.findOne({email})
if(exists){
    return res.json({success:false,message:"User Already Exists."})
}

if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please Enter a Valid Email."})
}

if(password.length < 8){
            return res.json({success:false,message:"Please Enter a Strong Password."})
}

// hashing password
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password,salt)

const newUser = new userModel({
    name,
    email,
    password:hashPassword
});

const user = await newUser.save()

const token = createToken(user._id)
res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
// user login
const userLogin = async(req,res)=>{

    try {
        
        const {email,password} = req.body

        const user = await userModel.findOne({email})
        if(!user){
                return res.json({success:false,message:"User Doesn't Exists."})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch){
            const token = createToken(user._id)
            return res.json({success:true,token})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
// user registration
const admin = async(req,res)=>{

}

export {userLogin,userSignup,admin}