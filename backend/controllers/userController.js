import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config({
    path:".env"
})

export const Register=async(req,res)=>{
   try{
      const {fullname,email,password} =req.body

     if(!fullname || !email || !password){
        res.status(404).json({message: "Please fill all fields",success: false});
     } 

     const user=await User.findOne({email})

     if(user){
        res.status(404).json({message: "User already exists",success: false});
     }

      const hashedPassword=await bcryptjs.hash(password,10)

      const newUser=await User.create({fullname:fullname,email:email,password:hashedPassword})

      await newUser.save()

      res.status(200).json({message: "User registered successfully",success: true,newUser});
   }
   catch(error){
    res.status(500).json({message: "Error in registration"});
    console.log(error)
   }
}

export const Login=async(req,res)=>{
   try{
     const {email,password}=req.body

     const user=await User.findOne({email});

     if(!user){
      return  res.status(404).json({message: "User does not exist",success: false});
     }

     const match=await bcryptjs.compare(password,user.password)

     if(!match){
       return res.status(404).json({message: "Invalid Credentials",success: false});
     }

     const payload={
        id:user._id
     }
     const token=jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:"1d"})

     res.status(200).cookie("token",token,{httpOnly:true}).json({message: "User logged in successfully",success: true,user});
   }
   catch(error){
    res.status(500).json({message: "Error in login"});
    console.log(error)
   }
}

export const Logout=async(req,res)=>{
    return res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({ message: "User logged out successfully", success: true });
}