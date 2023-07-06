const express = require('express')
const order = require('../models/order')

const router = express.Router();

// -- Post API --
router.post('/',async (req,res)=>{


  // console.log(req.body)
  // res.send(req.body)

  let data = new order (req.body);
  let result = await data.save();
  console.log(req.body)
  res.send(result)
});

// -- Get API --
router.get("/", async (req, res) => {
  let data = await order.find();
  console.log(data);
  res.send(data);
});

router.put("/:_id", async (req, res) => {


  let data = await order.updateOne(
    req.params, // Condition (Incoming - As an Object -- So no curly brackets)
    {
      $set: req.body, // Updated Data
    }
  );
  res.send(data);
});

module.exports = router;
