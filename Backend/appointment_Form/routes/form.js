const express=require('express');

const router=express.Router();

const formController=require('../controllers/form');

router.get('/',formController.getUsers);

router.post('/post',formController.postuser);

router.delete('/delete/:id',formController.deleteuser);

module.exports=router;