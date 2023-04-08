const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    numtaveler:{
        type: Number,
        required:true
    },
    title:{
        type:Array,
        required:true

    },
    fullname:{
        type:Array,
        required:true
    },
    age:{
        type:Array,
        required:true
    },
    email:{
        type:String,
        

    },
    mobilenum:{
        type:Number,
        required:true

    },
    Location:{
        type:String,
    }
})

const packagebooking = new mongoose.model("Package",clientSchema);

module.exports = packagebooking;