const joi = require('joi');


const validator = (schema) =>(payload)=>
schema.validate(payload, {abortEarly: false})
// validation of create user  shema using Joi
const createuserschema = joi.object({
  email:joi.string().required().email(),
  fullname:joi.string().required(),
  phone:joi.string().required().min(11).max(15),
  password:joi.string().required().min(5).max(10)
});
exports.validatecreateuser = validator(createuserschema); 