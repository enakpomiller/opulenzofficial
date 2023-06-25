const express = require('express');
const router = express.Router();
const user = require('./models');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { validatecreateuser } = require("./validator");






router.post('/createuser', async (req,res) =>{
    try{
        const {error, value} = validatecreateuser(req.body);
        // if(error){
        //      console.log(error);
        //     res.status(400).json({
        //       "status":false,
        //       "message":error.details
        //      }
        //      )

        //     }
      
            if(error){
                console.log(error.details[0]["message"]);
                return res.status(400).json({
                "status":false,
                "message":error.details[0]['message']

                 }
                
               
                )                 
            }
         
      
        
        const {email,fullname,phone} = req.body;
        const password = await bcrypt.hash(req.body.password,10);
        const UserExist = await user.findOne({where:{email:email}});
        if(UserExist){
         return res.status(301).json({message:" Sorry this user Already Exist"});
        }else{
        const createuser = user.build({
            email,
            fullname,
            phone,
            password 
            });
            await createuser.save();
            return res.status(201).json(createuser);
        }
     }catch(error){
      console.log({message:error});
    }
   
})

















module.exports = router;