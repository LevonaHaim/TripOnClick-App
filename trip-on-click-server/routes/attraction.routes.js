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
router.get("/", async (request, res) => {
  try {
<<<<<<< HEAD
    const attractions = await AttractionService.getAllAttractions();
    console.log(attractions)
    res.status(200).send(attractions);
=======
    res.json(await AttractionService.getAllAttractions());
    // const attractions = await AttractionService.getAllAttractions();
    // console.log(attractions)
    // res.status(200).send(attractions);
>>>>>>> e402fbfe44161c12c92e03467b98824926c8df45
  } catch (e) {
    console.log(e);
  }
});





module.exports = router;