const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async () => {
    const users = await User.find({});
    return users;
};

const getUserById = async (req, res) => {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(user);
            res.status(200).json(user);
        }
    });
};

const register = (request, response) => {

    bcrypt
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
            // create a new user instance and collect the data
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                username: request.body.username,
                password: hashedPassword,
                email: request.body.email,
            });

            // save the new user
            User.create(newUser)
                // return success if the new user is added to the database successfully
                .then((result) => {
                    response.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                // catch error if the new user wasn't added successfully to the database
                .catch((error) => {
                    response.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        // catch error if the password hash isn't successful
        .catch((e) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });
    // const newUser = new User({
    //     _id: new mongoose.Types.ObjectId(),
    //     username: request.body.username,
    //     password: request.body.password,
    //     email: request.body.email,
    // });
    // await User.create(newUser)
    //     .then(user => {
    //         response.status(201).send({
    //             message: "User Created Successfully",
    //             user,
    //         });
    //     }).catch(error => {
    //         response.status(500).send({
    //             message: "Error creating user",
    //             error,
    //         });
    //     });
}

const login = (request, response) => {

    User.findOne({ email: request.body.email })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
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
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });

}






const deleteUser = async (request, response) => {
    console.log(request.params.id);
    try {
        const user = await User.findByIdAndDelete(request.params.id);
        if (!user) response.status(404).send("No item found");
        response.status(200).json(user);
    } catch (error) {
        response.status(500).send(error);
    }
}

const updateUser = async (request, response) => {
    try {
        const user = await User.findByIdAndUpdate(request.params.id, { $set: request.body }, { new: true });
        if (!user) {
            response.status(404).send("No item found to update");
        }
        response.status(200).json(user);
    } catch (error) {
        console.log("error");
        response.status(500).send(error);
    }
}


module.exports = { getAllUsers, register, getUserById, deleteUser, updateUser, login };