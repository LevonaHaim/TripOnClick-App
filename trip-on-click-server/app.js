// import fs from "fs"
// const fs = require('fs')
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
<<<<<<< HEAD
=======
const jwt = require("jsonwebtoken");
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45
const mongoose = require('mongoose');
const app = express();
//const tripsRoutes = require("./routes/trip.routes");
//const attractionsRoutes = require("./routes/attraction.routes");
const usersRoutes = require("./routes/user.routes");
const bcrypt = require("bcrypt");


<<<<<<< HEAD


mongoose.connect('mongodb+srv://meytal106:5YLA9Q5yXnz7R5Z5@triponclickdb.kaks7p2.mongodb.net/TOCDB?retryWrites=true&w=majority',{
=======
mongoose.connect('mongodb+srv://meytal106:5YLA9Q5yXnz7R5Z5@triponclickdb.kaks7p2.mongodb.net/TOCDB?retryWrites=true&w=majority', {
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('mongoDB connected!');
});



require('dotenv').config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());//req.body.message
app.use(express.urlencoded({ extended: false }));






//Routes
//app.use('/trips', tripsRoutes);
app.use('/users', usersRoutes);
//app.use('/attractions', attractionsRoutes);


app.use((req, res, next) => {
    console.log("hii");
<<<<<<< HEAD
    const error = new Error('Not Found');
=======
    const error = new Error('Not Found router');
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;