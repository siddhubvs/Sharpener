const express=require('express')

const router=express.Router();

const path=require('path');

const rootDir=require('../helper/path');

router.get('/',(req,res,next)=>{
    console.log('In another middleware');
    res.sendFile(path.join(rootDir,'views','contact.html'));
})

router.post('/',(req,res,next)=>{
    res.redirect('/success');
})

module.exports=router;