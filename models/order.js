const mongoose = require("mongoose");
// -- Schema --
const orderSchema = new mongoose.Schema({
  name: String,
  price: Number,
  origin: String,
  description: String,
  url: String,
  quantity: Number,
  userId : String,
  orderStatus: String,
  username: String


});
// -- Model --
const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
