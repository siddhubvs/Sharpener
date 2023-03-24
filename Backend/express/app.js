const express=require('express')

const app=express()

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}))

app.use('/addProduct',(req,res,next)=>{
    console.log('In middleware');
    res.send("<form action='/product' method='POST'> <input type='text' name='title'> <input type='text' name='size'><button type='submit'>Send</button></form>")
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})



app.use('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Welcome to express demo</h1>')
})

app.listen(4000);

