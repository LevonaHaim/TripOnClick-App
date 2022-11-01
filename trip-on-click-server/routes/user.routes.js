const UserService = require('../services/user.service');


const express = require('express');
const router = express.Router();


    //insert here all your Trips routes and calls the methods in the service
    //for example:

    //  router.get("/", async (req, res, next) => {
    // try {
    //     const trips = await TripService.getAllTrips();
    //     res.status(200).send(trips);
    //   } catch (e) {
    //     console.log(e);
    //     next(e);
    //   }
    // };

    //TEST
    /* /users/ */
     router.get("/",  (req, res, next) => {
    try {
        res.status(200).json({
            Message : "users"
        });
      } catch (e) {
        console.log(e);
        next(e);
      }
    });




module.exports = router;