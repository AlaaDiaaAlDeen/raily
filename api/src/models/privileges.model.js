const mongoose = require('mongoose')

const privilegesSchema = mongoose.Schema({
    routeLink:{
        type:String,
        required:true
    },
    privilegedRoles:[{
        type:String
    }]
})

const PrivilegesModel = mongoose.Model('Privileges', privilegesSchema)

module.exports = PrivilegesModel