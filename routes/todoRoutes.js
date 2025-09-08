const express=require("express");
const { addTodo, getAllTodo, updateTodo, getTodoById, deleteTodo } = require("../controllers/todoController");
const router=express.Router();

router.post("/addTodo",addTodo);
router.get("/getAllTodo",getAllTodo);

router.put("/updateTodo",updateTodo);
router.post("/getTodoById",getTodoById)

router.delete("/deleteTodo",deleteTodo)
module.exports=router