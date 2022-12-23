
const TripService = require('../services/trip.service');
const express = require('express');
const Trip = require('../models/Trip');
const Attraction = require('../models/Attraction');

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
    /* /trips/ */
     router.get("/",  async (req, res, next) => {
    // try {
    //     res.status(200).json({
    //         Message : "all trips"
    //     });
    //   } catch (e) {
    //     console.log(e);
    //     next(e);
    //   }
    try {
      const trips = await TripService.getAllTrips();
      res.status(200).send(trips);
    } catch (e) {
      console.log(e);
    }
    });

    router.get('/:id', async (req, res) => {
      // const trip = await Trip.findById(req.params.id).populate('attractions.attraction')
      // res.send(trip)
      try {
        await TripService.getAttractionByTripId(req,res);
      } catch (e) {
        res.status(500).send(e);
      }
  })

  


  router.delete("/delete/:id", async (req, res) => {
    try {
      await TripService.deleteTrip(req, res);
    }
     catch (error) {
      res.status(500).send(error);
    }
  });

  router.get("/:id/attractions",async (request, response) => {
    try {
      const trip = await Trip.findById(request.params.id).populate('attractions');
      console.log(trip);
      // const trip = await Trip.findById('6379740a5a920fe00875cd20').populate('attractions.attraction')
      // user.trips.push(trip);
      // await user.save();
      response.send(trip.attractions);
  
    }
  
      // response.send(user.trips);
    catch (e) {
    response.status(500).send(e);
  }
  });
  //   router.get('/:id', async (req, res) => {
  //     const trip = await Trip.findById(req.params.id).populate('attractions.attraction')
  //     res.send(trip)
  // })


module.exports = router;