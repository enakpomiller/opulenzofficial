
const {Sequelize, sequelize} = require('./db');

const {DataTypes} = require('sequelize');



const user = sequelize.define('tbl_user',{
    email:{
        type:DataTypes.STRING,
        validate:{
         max:200
        }
      },
      fullname:{
       type:DataTypes.STRING
      },
      phone:{
        type:DataTypes.STRING
       },
       password:{
        type:DataTypes.STRING
       }

})


sequelize.sync();


module.exports = user;