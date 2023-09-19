const mongoose = require("mongoose");
const produitSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
        trim : true,
    },
    prix : {
        type : Number,
        required : true,
        trim : true,
    },
    imgUrls : {
        type : [String],
        required : true,
        trim : true,
    },
    stock : {
        type : Number,
        required : true,
        trim : true,
    },
    categorie : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'categorie'   
    },


});
module.exports = {model : mongoose.model('produit',produitSchema),schema : produitSchema};