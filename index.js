
const express = require('express');
const mongoose = require('./config')
const cors = require('cors')
require('dotenv').config()
const path = require('path')
const itemRoute = require('./routes/item-route')
const userRoute = require('./routes/user-route')
const adminRoute = require('./routes/admin-route')
const cartRoute = require('./routes/cart-route')
const orderRoute = require('./routes/order-route')

const app = express();
app.use(express.json())                    // Middleware - To parse incoming data (Its based on body-parser) : A built-in body-parser in express
app.use(cors());

// -- Item Route File--
app.use('/items',itemRoute)

// -- User Route File--
app.use('/user',userRoute)

// -- Admin Route File--
app.use('/admin',adminRoute)

// -- Cart Route File--
app.use('/cart',cartRoute)

// -- Order Route File--
app.use('/order',orderRoute)

//static files

app.use(express.static(path.join(__dirname,'./foodapp/dist/foodapp')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./foodapp/dist/foodapp/index.html'))

});


app.listen(process.env.port,()=>{
    console.log('Server Started')
});
