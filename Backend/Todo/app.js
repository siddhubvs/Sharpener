var express=require('express');

var bodyparser=require('body-parser');

var cors=require('cors');

var app=express();

const sequelize=require('./utils/database');

const todo=require('./models/todo');

const todoroutes=require('./routes/todo');

todo.sync();

app.use(cors());

app.use(bodyparser.json({extended:false}))

app.use('/todo',todoroutes);



sequelize.sync()
.then(result=>{
    console.log(result);
    app.listen(4000);
})
.catch(err=>console.log(err));

