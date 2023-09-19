const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
    },
    password : {
        type : String,
        required : true,
        trim : true,
    },
    phoneNumber : {
        type : String,
        required : true,
        trim : true,
    },
    adresse : {
        type : String,
        required : true,
        trim : true,
    }
});
module.exports = mongoose.model('client',clientSchema);