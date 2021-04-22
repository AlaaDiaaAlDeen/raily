// step1 declaring variable from installing dependancies
require('dotenv').config();
var express = require('express');
const bodayParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

const path = require('path');
const passport = require('passport');
//Intiailzie app with express
const app = express();
const UserRoutes = require('./route/user');
// const PrivilegesRoutes = require('./route/privileges.routes.js')

// step2 connected to with db
try{
  mongoose.connect(process.env.DATABASE,{
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
  });
}catch(e){
  console.log(e)
}
mongoose.connection.on('connected',()=>{
  console.log('connected to mongo db');
});
mongoose.connection.on('error',(err)=>{
  console.log(`Unable to connect to the database: ${err}`);
});
//Port to be used by the server
const _PORT = process.env.PORT;
// middelware
//---------------- Middlewares ----------------//
//CROS MW
app.use(cors());
//Body Parser MW
app.use(bodayParser.json());
//Passport MW
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
//---------------- Middlewares ----------------//
//  index routes
app.get('/',(req,res)=>{
  res.send("server run successfuly...");
});
// middelware
app.use('/users', UserRoutes);
// app.use(PrivilegesRoutes);
// start server
app.listen(_PORT,()=>{
  console.log('server started at port ' + _PORT);
});