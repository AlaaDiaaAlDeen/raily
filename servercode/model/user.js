//User Model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const  validator = require('validator');

const UserSchema = mongoose.Schema({
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
    }},
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
userName:{
    type:String,
    unique:true
},
});
// 
//Pre Save Hook. Used to hash the password
UserSchema.pre('save',function(next) {

  if (!this.isModified('password'))  {
    return next();
  }
 //Generate Salt Value
 bcrypt.genSalt(10, (err, salt) => {
   if (err) {
     return next(err);
   }
   //Use this salt value to hash password
   bcrypt.hash(this.password, salt, (err, hash) => {
     if (err) {
       return next(err);
     }
     this.password = hash;
     next();
   });
 });
});
//Custom method to check the password correct when login
UserSchema.methods.isPasswordMatch = function(plainPassword, hashed, callback) {
  bcrypt.compare(plainPassword, hashed, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
}
// 
const User = mongoose.model('User', UserSchema);
module.exports = User