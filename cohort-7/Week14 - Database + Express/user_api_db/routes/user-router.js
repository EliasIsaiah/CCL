const mongoose = require("mongoose");
const express = require("express");
const userSchema = require("../models/User");
const User = mongoose.model("User", userSchema);

const router = express.Router();

// get user
router.get("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let foundUser = await User.findById(id);
    if (!foundUser) {
      res.status(404).send("user not found");
    }
    res.status(200).send(foundUser);
  } catch (error) {
    console.log("error" + error);
    res.status(400).send(error);
  }
});

module.exports = router;
