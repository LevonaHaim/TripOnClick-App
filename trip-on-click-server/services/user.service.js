const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const maxAge = 3 * 24 * 60 * 60;

//get the userId and assign new JWT token
const createToken = (id) => {
    return jwt.sign({  id }, "SSK", {
        expiresIn: "5s"
    });
};

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

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        // const token = createToken(user.id);

        // res.cookie("jwt", token, {
        //     withCredentials: true,
        //     httpOnly: false,
        //     maxAge: maxAge * 1000,
        // });
        console.log("finishRegister");
        res.status(201).json({ user: user.id, created: true });
    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
}

const getUserLogin = async (email, password) => {
    console.log(email);
    console.log(password);
    if(email == "" || password==""){
        throw Error("empty fields");
    }
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            console.log(user);
            return user;
        }
        throw Error("סיסמא שגויה");
    }
    throw Error("אימייל שגוי");
}


const login = async (req, res) => {
    const { email, password } = req.body;
    console.log("startlogin")
    try {
        const user = await getUserLogin(email, password);
        const token = createToken(user.id);
        res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
        console.log("finishlogin")
        res.status(200).json({ user: user.id, status: true });
    } catch (err) {
        console.log('error occourd');
        const errors = handleErrors(err);
        console.log(errors);
        res.json({ errors, status: false });
    }
}

const deleteUser = async (request, response) => {
    console.log("delete");
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


const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    console.log(err);
    if (err.message === "empty fields") {
        errors.email = "OOps need email and password";
    }

    if (err.message === "אימייל שגוי") {
        errors.email = "אמייל לא רשום";
    }


    if (err.message === "סיסמא שגויה") {
        errors.password = "סיסמא שגויה";
    }

    //register error
    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }

    //register error
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
        console.log(errors);
    }

    return errors;
};

module.exports = { getAllUsers, register, getUserById, deleteUser, updateUser, login };