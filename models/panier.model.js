const mongoose = require('mongoose');
const panierSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'client',

    },
    produit : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "produit"
    },
    quantite : {
        type : Number,
        required : true,
    },
    total : {
        type : Number,
        required : true,
    }

});
module.exports = mongoose.model('panier',panierSchema);