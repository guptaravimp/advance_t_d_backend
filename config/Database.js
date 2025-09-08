const mongoose=require('mongoose');
require("dotenv").config()

exports.DBConnection=async()=>{
   try{
     await mongoose.connect(process.env.MONGODB_URL || '')
    console.log("Database Connection successful");
   }catch(error){
    console.log("DB Connection failed")
    console.log("Error is",error)
   }
}