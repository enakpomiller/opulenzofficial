const {Sequelize} = require('sequelize');


const sequelize = new Sequelize(
     'opulentzofficial',
     'root',
     '',{
        dialect:'mysql',
        host:'localhost'
       }
    );


    const connectToDB = async () =>{
       try{
           await sequelize.authenticate();
            console.log(" database connected successfully");
        
       }catch(error){
        console.log({message:error});
       }
    }


    module.exports = {sequelize,connectToDB}

