const mongoose = require("mongoose");
// -- Schema --
const cartSchema = new mongoose.Schema({
  name: String,
  price: Number,
  origin: String,
  description: String,
  url: String,
  quantity: Number,
  userId : String,
  username: String


});
// -- Model --
const cartModel = mongoose.model("cart", cartSchema);
module.exports = cartModel;
