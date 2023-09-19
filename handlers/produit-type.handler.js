const produitTypeModel = require('../models/produit_type.model');
const addProduitType = async (req,res,next) => {
    const {nom} = req.body;
    try{
        let produitType = await new produitTypeModel({nom}).save();
        res.status(200).send(produitType);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const getProduitTypes = async (req,res,next) => {
    try{
        let produitTypes = await  produitTypeModel.find();
        res.status(200).send(produitTypes);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const getProduitTypeById = async (req,res,next) => {
    const id = req.params.id;
    try{
        let produitType = await  produitTypeModel.findById(id);
        res.status(200).send(produitType);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const updateProduitType = async (req,res,next) => {
    const id = req.params.id;
    try{
        let produitType = await  produitTypeModel.findByIdAndUpdate(id,{$set : {...req.body}});
        res.status(200).send(produitType);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }

}

const deleteProduitType = async (req,res,next) => {
    const id = req.params.id;
    try{
        let produitType = await  produitTypeModel.findByIdAndDelete(id);
        res.status(200).send(produitType);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }

}

module.exports = {
    addProduitType,
    getProduitTypes,
    getProduitTypeById,
    updateProduitType,
    deleteProduitType,
}