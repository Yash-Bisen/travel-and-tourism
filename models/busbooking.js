const mongoose = require("mongoose");

 
const clientSchema = new mongoose.Schema({
    
   from: {
        type: String,
        required:true,
        uppercase:true
    },

    to: {
        type: String,
       required:true,
        uppercase:true
    },

    departuredate:{
        type: Date,
        default: Date.now,
        required:true
       
    },
    nooftraveller:{
        type:Number,
        required:true
    }

})



const busbooking = new mongoose.model("Busbooking",clientSchema);

module.exports = busbooking;