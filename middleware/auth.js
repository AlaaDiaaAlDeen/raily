const jwt = require('jsonwebtoken')
const User = require('../model/user')
const PrivilegesModel = require('../model/privileges.model.js')

const auth = async(req, res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWTSECRET)
        console.log(decoded._id)
        console.log(token)
        const user = await User.findOne({
            '_id': decoded._id,
            'tokens.token': token,
            'status': true
        })
        if(!user) throw new Error('Failed to log in')

        req.user = user
        req.token = token

        const data = await PrivilegesModel.findOne({'routeLink':req.originalUrl})
        if(data){
            if(data.privilegedRoles.includes(user.role))
                next()
            else throw new Error('Unauthoraized access')
        }else throw new Error('No such route')
    }catch(e){
        res.status(500).send({
            "apiStatus": false,
            "error": e.message,
            "message": 'Authorization failed'
        })
    }
}

module.exports = auth