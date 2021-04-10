require('./db/db')
const express = require ('express')
const cors = require('cors')
const userRoutes = require('./routes/user.routes.js')
const restRoutes = require('./routes/rest.routes.js')

const app = express()
app.use(cors())
app.use(express.json())
app.use(userRoutes)

module.exports = app