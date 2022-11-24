// import fs from "fs"
// const fs = require('fs')
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
//const tripsRoutes = require("./routes/trip.routes");
//const attractionsRoutes = require("./routes/attraction.routes");
const usersRoutes = require("./routes/user.routes");


mongoose.connect('mongodb+srv://meytal106:5YLA9Q5yXnz7R5Z5@triponclickdb.kaks7p2.mongodb.net/TOCDB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', ()=>{
    console.log('mongoDB connected!');
});



require('dotenv').config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());//req.body.message
app.use(express.urlencoded({extended: false}));

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     if (req.method === "OPTIONS") {
//         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//         return res.status(200).json({});
//     }
//     next();
// });




//Routes
//app.use('/trips', tripsRoutes);
//app.use('/users', usersRoutes);
//app.use('/attractions', attractionsRoutes);


app.use((req, res, next) => {
    console.log("hii");
    const error = new Error('Not Found');
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