const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
    client : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        trim : true,
        ref : 'client',
    },
    total : {
        type : Number,
        required : true,
    },
    status  : {
        type : String,
        enum : ["ouvert","en livraison","achevé"]
    },
    cree_le : {
        type : Date,
        required : true,
    },
    modifiee_le : {
        type : Date,
    }


   

});
module.exports = mongoose.model('commandes_detail',commandeSchema);