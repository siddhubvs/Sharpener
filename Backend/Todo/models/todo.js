const Sequelize=require('sequelize');

const sequelize=require('../utils/database');

const todo=sequelize.define('todo',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    description:Sequelize.STRING

})

module.exports=todo;