const express=require('express')

const app=express()

const bodyparser=require('body-parser');

const path=require('path')

app.use(bodyparser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')));

const adminroute=require('./routes/admin');

const shoproute=require('./routes/shop');

const contact=require('./routes/contact');

app.use('/admin',adminroute);

app.use('/shop',shoproute);

app.use('/contact',contact);

app.use('/success',(req,res,next)=>{
    res.send('<h1>Form submitted successfully</h1>');
})

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000);

