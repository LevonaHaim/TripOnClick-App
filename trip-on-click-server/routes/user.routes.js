const userService = require("../services/user.service");
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();



//TEST
/* /users/ */

router.get("/", async (request, response) => {
  // try {
  //   console.log("levv");
  //   res.json(await userService.getAllUsers());
  // } catch (error) {
  //   response.status(500).send(error);
  // }
  try {
    const users = await userService.getAllUsers();
    response.status(200).send(users);
  } catch (e) {
    console.log(e);
  }
});


router.get("/:id", async (request, response) => {
  try {
    await userService.getUserById(request,response);
  } catch (e) {
    response.status(500).send(e);
  }
});


router.post("/register",  (request, response) => {
  try {
     userService.register(request, response);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.post("/login", async (request, response) => {
  try {
    await userService.login(request, response);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/delete/:id", async (request, response) => {
  try {
    await userService.deleteUser(request, response);
  }
   catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/:id", async (request, response) => {

  try {
    await userService.updateUser(request, response);
  }
   catch (error) {
    response.status(500).send(error);
  }
});












// router.post("/create", async (req, res) => {
//   console.log("hh");
//   try {

//     const newUser = new User({
//       _id: new mongoose.Types.ObjectId(),
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email,
//     });

//     await User.create(newUser);
//     res.send("user added");
//   } catch (err) {
//     console.log("error: ", err);
//   }
// });





// });

module.exports = router;