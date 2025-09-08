const express=require("express");
const  DBConnection  = require("./config/Database");
const todoRoute=require("./routes/todoRoutes")
const categoryRoutes=require("./routes/categoryRoutes")
const cors=require("cors")
const app=express();
require("dotenv").config()
const PORT=process.env.PORT || 5000
app.use(express.json());

app.use(cors({
    origin:"https://advancetodo-six.vercel.app"
}))
DBConnection();
app.get("/",(req,res)=>{
    res.send("App is running fine")
})

app.use("/api/v1",todoRoute)
app.use("/api/v1",categoryRoutes)
app.listen(PORT,()=>{
    console.log("App is running on PORT ",PORT)
})