const mongoose = require("mongoose");
const categorieSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
    },
    type : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'produit_type'
    }
});
module.exports = mongoose.model('categorie',categorieSchema);