const express=require('express');
const  models  = require('mongoose');
const router =express.Router();
const Pizza =require('../modal/Mealmodel');
router.get("/",async(req,res)=>{
    try{
  const pizzas=await Pizza.find();
  res.json(pizzas);
    }catch(error){
     res.status(400).json({error:error});
    }
  // res.json({message:"also working"})
});
module.exports=router;