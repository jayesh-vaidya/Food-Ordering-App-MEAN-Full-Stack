const express = require('express')
const cart = require('../models/cart')

const router = express.Router();

// -- Post API --
router.post('/',async (req,res)=>{


  // console.log(req.body)
  // res.send(req.body)

  let data = new cart (req.body);
  let result = await data.save();
  // console.log(req.body)
  res.send(result)
});

// -- Get API --
router.get("/", async (req, res) => {
  let data = await cart.find();
  // console.log(data);
  res.send(data);
});

// -- Delete API --
router.delete("/:id", async (req, res) => {
  let itemId = { _id: req.params.id };
  let data = await cart.findByIdAndDelete(itemId);
  res.send(data);

  // console.log(itemId)
  // res.send(itemId)
});

module.exports = router
