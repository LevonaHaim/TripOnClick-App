<<<<<<< HEAD

=======
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45
const userService = require("../services/user.service");
const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();


<<<<<<< HEAD
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
=======

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
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45

    await User.create(newUser);
    res.send("user added");
  } catch (err) {
    console.log("error: ", err);
  }
});

router.post("/login", async (request, response) => {
  User.findOne({ email: request.body.email })

  // if email exists
  .then((user) => {
    console.log("ggg")
    // compare the password entered and the hashed password found
    bcrypt
      .compare(request.body.password, user.password)
      con
      // if the passwords match
      .then((passwordCheck) => {

        // check if password matches
        if(!passwordCheck) {
          return response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        }

        //   create JWT token
        const token = jwt.sign(
          {
            userId: user._id,
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          { expiresIn: "24h" }
        );

        //   return success response
        response.status(200).send({
          message: "Login Successful",
          email: user.email,
          token,
        });
      })
      // catch error if password does not match
      .catch((error) => {
        response.status(400).send({
          message: "Passwords does not match",
          error,
        });
      });
  })
  // catch error if email does not exist
  .catch((e) => {
    console.log("TT")
    response.status(404).send({
      message: "Email not found",
      e,
    });
  });
  


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