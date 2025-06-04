
const mongoose = require("mongoose");
const Trip = require("./models/Trip");



mongoose.connection.on('connected', ()=>{
    console.log('mongoDB connected!');
});

var rawDocuments = [
   {
    startDate : "2014-01-22T14:56:59.301Z",
    finalDate : "2014-01-22T14:56:59.301Z",
    attractions : [
        {
            attraction : 
            {
                _id : "637564d0e1009f9a613cec93"
            }
        },
    ]
   }
];

Trip.insertMany(rawDocuments)
.then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});
