
const userService = require("../services/user.service");
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();


router.get("/", async (request, res) =>{
  try {
        const users = await userService.getAllUsers();
        console.log(users)
        res.status(200).send(users);
      } catch (e) {
        console.log(e);
      }
});

router.post("/create", async (req, res) => {
  console.log("hh");
  // const { username, password, email } = req.body;

  try {
    console.log("req.body: ", req.body);

    const newUser = new User({
     _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    await User.create(newUser);
    res.send("user added");
  } catch (err) {
    console.log("error: ", err);
  }
});



module.exports = router;