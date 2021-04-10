const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    
})


const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel