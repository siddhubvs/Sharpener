const express=require('express');

const cors=require('cors');

const app=express();

const bodyparser=require('body-parser');

const sequelize=require('./util/database');

const expense=require('./model/expense');

const expenseRoutes=require('./route/expense');

expense.sync();

app.use(cors());

app.use(bodyparser.json({extended:false}));

app.use('/expense',expenseRoutes);

sequelize.sync()
.then((result)=>{
    console.log(result);
    app.listen(4000);
})
.catch((err)=>{
    console.log(err);
})