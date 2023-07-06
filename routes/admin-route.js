const express = require('express')
const admin = require('../models/admin')

const router = express.Router();

// -- Post API --
router.post('/',async (req,res)=>{
  let data = new admin (req.body);
  let result = await data.save();
  console.log(req.body)
  res.send(result)
});

// -- Get API --
router.get("/", async (req, res) => {
  let data = await admin.find();
  console.log(data);
  res.send(data);
});

module.exports = router
