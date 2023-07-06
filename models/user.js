const mongoose = require('mongoose');
// -- Schema --
const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
});
// -- Model --
const userModel = mongoose.model('user', userSchema)
module.exports = userModel
