const express=require('express')

const router=express.Router();

const path=require('path');

const productController=require('../controllers/contacts');

router.get('/',productController.getForm);

router.post('/',productController.postForm);

module.exports=router;
