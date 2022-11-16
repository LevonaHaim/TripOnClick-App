const userService = require("../services/user.service");
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();


//insert here all your Trips routes and calls the methods in the service
//for example:

//  router.get("/", async (req, res, next) => {
// try {
//     const users = await UserTrips.getAllUsers();
//     res.status(200).send(users);
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// };

//TEST
/* /users/ */




router.get("/", async (request, res) =>{
  try {
        const users = await userService.getAllUsers();
        console.log(users)
        res.status(200).send(users);
      } catch (e) {
        console.log(e);
      }
});








// router.get("/", async (request, response) => {
//   const users = await User.find({});
//   try {
//     console.log(users)
//     response.send(users);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

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


      // const user = new User(request.body);
      // try {
      //   await user.save();
      //   response.send(user);
      // } catch (error) {
      //   response.status(500).send(error);
      // }



// });











module.exports = router;