const mongoose = require('mongoose')

const stopSchema = new mongoose.Schema({
  source:{
    type:String,
    trim:true,
    required:true
},
dest:{
  type:String,
  trim:true,
  required:true,
},
duration:{
  type:Nummber,
  required:true

},cost:{
    type:Nummber,
    required:true
 }
})

userSchema.virtual('stopTrip', {
    ref:'Trip',
    localField: "_id",
    foreignField:"stops"
})

const StopModel = mongoose.model('Stop',stopSchema)
module.exports = StopModel