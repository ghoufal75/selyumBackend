const mongoose = require("mongoose");
const produitSchema = require('../models/produit.model').schema;
const produitCommandeSchema = new mongoose.Schema({
    product:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'produit'
    },
    quantity: {
        type : Number
    }
})
const commandesProduitsSchema = new mongoose.Schema({
    produits : [
       produitCommandeSchema
    ],
    client : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        trim : true,
        ref : 'client',
    },
    status : {
        type : String,
        default : 'Ouvert',
    }
    
});
module.exports = mongoose.model('commandes',commandesProduitsSchema);