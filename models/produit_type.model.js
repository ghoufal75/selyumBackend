const mongoose = require("mongoose");
const produit_typeSchema = new mongoose.Schema({
    nom: {
        type : String,
        required : true,
    },
});
module.exports = mongoose.model('produit_type',produit_typeSchema);