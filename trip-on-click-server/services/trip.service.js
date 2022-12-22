const Attraction = require("../models/Attraction");
const Trip = require("../models/Trip");

const getAllTrips = async () => {
    const trips = await Trip.find({});
    return trips;
}


const getTripById = async(req,res) => {

        Trip.findById(req.params.id, function (err, trip) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(trip);
                res.status(200).json(trip);
            }
        });
    };

    const getAttractionByTripId = async(req,res) => {

        Trip.findById(req.params.id, function (err, trip) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(Attraction);
                res.status(200).json(Attraction);
            }
        });
    };


    const deleteTrip = async (req, res) => {
        console.log(req.params.id);
        try {
            const trip = await Trip.findByIdAndDelete(req.params.id);
            if (!trip) res.status(404).send("No item found");
            res.status(200).json(trip);
        } catch (error) {
            res.status(500).send(error);
        }
    }


   


    module.exports = { getAllTrips,getTripById,deleteTrip,getAttractionByTripId };