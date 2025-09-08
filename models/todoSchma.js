const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        // enum:["Work","Health","Finance","Travel"],
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    },
    startDate:{
        type:Date,
        default:Date.now
    },
    endDate:{
        type:Date,
        required:true
    },
},{timestamps:true})


module.exports=mongoose.model("Todo",todoSchema)