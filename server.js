const express=require("express");
const cors=require('cors')
const app =express();
const db=require("./db.js");
const Meals=require("./modal/Mealmodel");
const pizzaRoute=require('./routers/pizzaRouter');
const userRoute=require('./routers/user');

app.use(express.json());
app.use(cors());
app.use("/api",pizzaRoute);
app.use("/user",userRoute)
app.get("/",(req,res)=>{
res.send("working");
});


const port=process.env.PORT || 8000;
app.listen(port, ()=>'app listen');