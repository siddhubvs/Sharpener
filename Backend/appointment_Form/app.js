const express = require('express');
const bodyParser = require('body-parser');



const app = express();

var cors=require('cors');

const sequelize=require('./util/database');

const user=require('./models/form');

app.use(cors());

app.use(bodyParser.json({ extended: false }));

const form=require('./models/form');

user.sync();

const formroute=require('./routes/form');

app.use('/form',formroute);

sequelize.sync().then((result)=>{
app.listen(4000);
}).catch(err=>console.log(err)); 
