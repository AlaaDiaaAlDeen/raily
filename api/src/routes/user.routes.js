const express = require('express')
const multer = require('multer')
const fs = require('fs')
const UserModel = require('../models/user.model')
const auth = require('../middleware/auth')

const router = new express.Router()



module.exports = router