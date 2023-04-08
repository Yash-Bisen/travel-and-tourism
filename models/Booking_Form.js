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
    vehicalname:{
        type:String,
    }
})

const bookingform = new mongoose.model("Bookingform",clientSchema);

module.exports = bookingform;