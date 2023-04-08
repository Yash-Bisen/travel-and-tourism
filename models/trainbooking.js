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
    nooftraveller:{
        type:Number,
        
    }

})



const trainbooking = new mongoose.model("Trainbooking",clientSchema);

module.exports = trainbooking;