const mongoose = require("mongoose");

 
const clientSchema = new mongoose.Schema({
    from: {
        type: String,
        
        uppercase:true
    },

    to: {
        type: String,
      
        uppercase:true
    },

    departuredate:{
        type: Date,
        default: Date.now,
       
       
    },
    classname:{
        type:String,
      
    }

})



const flightbooking = new mongoose.model("Flightbooking",clientSchema);

module.exports = flightbooking;