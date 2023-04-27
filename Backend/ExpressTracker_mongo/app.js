const express=require('express')

const app=express()

const bodyparser=require('body-parser')

const cors=require('cors')

const helmet=require('helmet');

const morgan=require('morgan');

const compression=require('compression');

const path=require('path');

const fs=require('fs');

const mongoose = require('mongoose');

const userRoutes=require('./routes/user')

const expenseRoutes=require('./routes/expense');

const purchaseRoutes=require('./routes/purchase');

const premiumRoutes=require('./routes/premium');

const passwordRoutes=require('./routes/password');

const accessLogStream=fs.createWriteStream(
    path.join(__dirname,'access.log'),
    {flags:'a'}
);

app.use(cors());

app.use(helmet());

app.use(morgan('combined',{stream:accessLogStream}));

app.use(compression());

app.use(bodyparser.json({extended:false}))

app.use('/user',userRoutes);

app.use('/expense',expenseRoutes);

app.use('/purchase',purchaseRoutes);

app.use('/premium',premiumRoutes);

app.use('/password',passwordRoutes);
//User.hasMany(Expense);

//Expense.belongsTo(User);

//User.hasMany(Order);

//Order.belongsTo(User);

//User.hasMany(ForgotPasswordRequests);

//ForgotPasswordRequests.belongsTo(User);

mongoose.connect('mongodb+srv://siddhu:siddhu2001@cluster0.dcbojec.mongodb.net/Expensetracker?retryWrites=true&w=majority')
.then(result=>{
    app.listen(4000)
})
.catch(err=>console.log(err));