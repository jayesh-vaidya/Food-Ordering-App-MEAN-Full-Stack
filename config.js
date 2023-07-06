
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.databaseUrl)




module.exports = mongoose
