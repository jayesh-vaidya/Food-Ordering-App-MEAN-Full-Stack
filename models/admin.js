const mongoose = require('mongoose');
// -- Schema --
const adminSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
});
// -- Model --
const adminModel = mongoose.model('admin', adminSchema)
module.exports = adminModel
