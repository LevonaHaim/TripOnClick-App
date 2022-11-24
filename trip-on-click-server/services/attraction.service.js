const Attraction = require('../models/Attraction');

const getAllAttractions = async () =>{
    const attractions = await Attraction.find({});
    return attractions;
};

module.exports = { getAllAttractions };