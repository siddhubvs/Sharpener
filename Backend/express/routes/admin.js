const express=require('express')

const router=express.Router();

router.get('/addProduct',(req,res,next)=>{
    console.log('In middleware');
    res.send("<form action='addProduct' method='POST'> <input type='text' name='title'> <input type='text' name='size'><button type='submit'>Send</button></form>")
})

router.post('/addProduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
})

module.exports=router;