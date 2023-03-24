const express=require('express')

const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Welcome to express demo</h1>')
})

module.exports=router;
