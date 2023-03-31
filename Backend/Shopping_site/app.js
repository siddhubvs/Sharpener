const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const sequelize=require('./util/database');
const product=require('./models/product');
const user=require('./models/User');

user.sync();
product.sync();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.use((req,res,next)=>{
    user.findByPk(1).then(user=>{
        req.user=user;
        next();
    })
    .catch(err=>console.log(err));
})

product.belongsTo(user,{constraints:true,onDelete:'CASCADE'});
user.hasMany(product);

sequelize.sync().then((result)=>{
    return user.findByPk(1);
})
.then((users)=>{
    if(!users)
    return user.create({name:'sid',email:'sid@gmail.com'});
    return users;
})
.then(user=>{
    console.log(user);
    app.listen(4000);
})
.catch(err=>console.log(err)); 
