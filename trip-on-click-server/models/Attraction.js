const mongoose = require('mongoose');

const attractionSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,   
    Name : String,
    Address : {
        Street : String,
        Number : Number,
        City : String
        
    },
    Area : String,
    Category: String,
    Destipopulation : String,
    image: String,
    hoursNum: Number,
    OpeningHours : String,
    ClosingHours : String,
    price: [Number],
    description: String,
    url: String
});

module.exports = mongoose.model('Attraction', attractionSchema)