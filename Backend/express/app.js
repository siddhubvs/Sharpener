const express=require('express')

const app=express()

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}))

const adminroute=require('./routes/admin');

const shoproute=require('./routes/shop');

app.use('/admin',adminroute);

app.use('/shop',shoproute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(4000);


