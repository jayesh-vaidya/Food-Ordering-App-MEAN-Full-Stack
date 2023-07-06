const mongoose = require('mongoose');
// -- Schema --
const itemSchema = new mongoose.Schema({
    name:String,
    price:Number,
    origin:String,
    description:String,
    url:String,
});
// -- Model --
const itemModel = mongoose.model('items', itemSchema)
module.exports = itemModel
