const express = require('express')
const user = require('../models/user')

const router = express.Router();

// -- Post API --
router.post('/',async (req,res)=>{
  let data = new user (req.body);
  let result = await data.save();
  console.log(req.body)
  res.send(result)
});

// -- Get API --
router.get("/", async (req, res) => {
  let data = await user.find();
  console.log(data);
  res.send(data);
});

router.get("/", async (req, res) => {
  let data = await user.find();
  console.log(data);
  res.send(data);
});



module.exports = router
