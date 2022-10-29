const AttractionService = require('../services/attraction.service');

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
    /* /attractions/ */
     router.get("/",  (req, res, next) => {
    try {
        res.status(200).json({
            Message : "all attractions"
        });
      } catch (e) {
        console.log(e);
        next(e);
      }
    });


module.exports = router;