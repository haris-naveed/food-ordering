const express=require('express');
const bcrypt=require('bcryptjs');
const jwt =require('jsonwebtoken');
const router =express.Router();
const User =require('../modal/User');
router.post("/signin",async(req,res)=>{

    const {email,password}=req.body;

  try {
    const existingUser=await User.findOne({email});

    if(!existingUser)
    res.json({message:"user does not exist"});

    const isPasswordCorrect=await bcrypt.compare(password,existingUser.password);

    if(!isPasswordCorrect)

    res.json({message:"invalid credentials"});

    const token=jwt.sign({email:existingUser.email,id:existingUser._id},"test",{expiresIn:"1hr"});

    res.json({result:existingUser,token})
  } catch (error) {
    res.json({message:"Something went wrong"});
  }
});

router.post("/signup",async(req,res)=>{
    const {email,password,confirmPassword,firstName,lastName}=req.body;
    try {
        const existingUser=await User.findOne({email});

        if(existingUser)
        res.json({message:"user already exist"});

        if(password!==confirmPassword)
        res.json({message:"Password does not match"});

        const hashedPassword=await bcrypt.hash(password,12)

        const result=await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});

        const token=jwt.sign({email:result.email,id:result._id},"test",{expiresIn:"1hr"})

        res.json({result,token});
    } catch (error) {
        res.json({message:"Something went wrong"});

    }
  });
module.exports=router;