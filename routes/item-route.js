const express = require("express");
const items = require("../models/items");

const router = express.Router();

// -- Post API --
router.post("/", async (req, res) => {
  let data = new items(req.body);
  let result = await data.save();
  console.log(req.body);
  res.send(result);
});

// -- Get API --
router.get("/", async (req, res) => {
  let data = await items.find();
  // console.log(data);
  res.send(data);
});

// ------------------------------------------

// -- Get API -- Single Item
router.get("/:id", async (req, res) => {
  let itemId = { _id: req.params.id };
  let data = await items.findById(itemId);
  res.send(data);

});

// -- Delete API --
router.delete("/:id", async (req, res) => {
  let itemId = { _id: req.params.id };
  let data = await items.deleteOne(itemId);
  res.send(data);
});

// -- Put API (Update) --
router.put("/:id", async (req, res) => {

  let data = await items.updateOne(
    // req.params, // Condition (Incoming - As an Object -- So no curly brackets)
    {_id:req.body.id},
    {
      $set: req.body // Updated Data
    }
  );

  res.send(data);

});

module.exports = router;
