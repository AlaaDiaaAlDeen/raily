const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')
// create user schema
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    trim:true,
    required:true
},
email:{
  type:String,
  trim:true,
  required:true,
  unique:true,
  validate(value){
      if(!validator.isEmail(value)) throw new Error('invalid email')
  }
},
phone:{
  type:String,
  validate(value){
      if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error('egyption mobile needed')
  }
},
password:{
  type:String,
  trim:true,
  required:true
}, 
role:{
  type:String,
  required:true
},
})


const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel