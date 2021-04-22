const mongoose = require('mongoose')

const privilegesSchema = mongoose.Schema({
    routeLink:{
        type:String,
        required:true,
        unique:true
    },
    privilegedRoles:[{
        type:String
    }]
})

const PrivilegesModel = mongoose.model('Privileges', privilegesSchema)

module.exports = PrivilegesModel