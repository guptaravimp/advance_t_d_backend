const express=require("express");
const { addCategory, getAllCategory } = require("../controllers/categoryController");
const router=express.Router();

router.post("/addCategory",addCategory);
router.get("/getAllCategory",getAllCategory)


module.exports=router;