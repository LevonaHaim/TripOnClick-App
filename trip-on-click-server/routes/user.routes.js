const userService = require("../services/user.service");
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
<<<<<<< HEAD
=======
const { checkUser } = require('../AuthMiddlewares');

>>>>>>> c68e7ecf08ada7bf1394f7f253d0e7f4b7cb545e
const router = express.Router();



//TEST
/* /users/ */

<<<<<<< HEAD
router.get("/", async (request, response) => {
  // try {
  //   console.log("levv");
  //   res.json(await userService.getAllUsers());
  // } catch (error) {
  //   response.status(500).send(error);
  // }
=======

router.get("/", async (request, response) => {
>>>>>>> c68e7ecf08ada7bf1394f7f253d0e7f4b7cb545e
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
<<<<<<< HEAD
  } catch (error) {
=======
  
    } catch (error) {
>>>>>>> c68e7ecf08ada7bf1394f7f253d0e7f4b7cb545e
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

<<<<<<< HEAD
router.get("/delete/:id", async (request, response) => {
  try {
=======
router.delete("/delete/:id", async (request, response) => {
  try {
    console.log("deleteR");
>>>>>>> c68e7ecf08ada7bf1394f7f253d0e7f4b7cb545e
    await userService.deleteUser(request, response);
  }
   catch (error) {
    response.status(500).send(error);
  }
});

<<<<<<< HEAD
=======

>>>>>>> c68e7ecf08ada7bf1394f7f253d0e7f4b7cb545e
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