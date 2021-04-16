const express = require('express')

const RolesModel = require('../models/user-roles.model.js')
const PrivilegesModel = require('../models/privileges.model.js')

const router = new express.Router()

 

module.exports = router