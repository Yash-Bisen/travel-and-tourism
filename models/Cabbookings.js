const mongoose = require("mongoose");

 
const clientSchema = new mongoose.Schema({
    way:{
        type:String,
        required:true
    },
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

    Departuredate:{
        type: Date,
        default: Date.now,
        required:true
       
    },

    pickuptime:{
       type:String,
       required:true
      
    },
    returndate:{
        type:Date,
        required:true
      
    },
    returntime:{
        type:String,
        required:true
    },
    Driverstatus:{
        type: String,
       required:true
    }

})



const Cabbooking = new mongoose.model("Cabbooking",clientSchema);

module.exports = Cabbooking;