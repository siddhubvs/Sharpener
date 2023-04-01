const express=require('express')

const router=express.Router();

const todocontroller=require('../controllers/todo')

router.get('/',todocontroller.getTodo);

router.post('/post',todocontroller.postTodo);

router.delete('/delete/:id',todocontroller.deleteTodo);

module.exports=router;