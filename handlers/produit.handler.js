const { default: mongoose } = require('mongoose');
const produitModel = require('../models/produit.model').model;
const addProduit = async (req,res,next) => {
    const {nom,prix,imgUrls,stock,categorie} = req.body;
    try{
        let produit = await new produitModel({nom,prix,imgUrls,stock,categorie}).save();
        res.status(200).send(produit);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const getProduitsByPriceInterval = async (req,res,next) => {
    const {max,min,categorieId} = req.query;
    console.log("Here is the max : ",max);
    console.log("Here is the min : ",min);
    console.log("Here is the categorie Id : ",categorieId);
    try{
        let result;
        if(max && !min){
             result = await produitModel.find({categorie : categorieId,prix : {$lte : max}});
        }
        else if (min && !max){
            result = await produitModel.find({categorie : categorieId,prix : {$gte : min}});
        }
        else if(max && min){
            
            result = await produitModel.find({categorie : categorieId,prix : {$gte : min,$lte : max}});
            console.log("stop");    
        }
        console.log(result);
        res.status(200).send(result);
    }
    catch(err){
        console.log(err);   
        res.status(500).json({error : err});
    }
}

const getProduits = async (req,res,next) => {
    try{
        let produits = await  produitModel.find().populate("categorie");
        res.status(200).send(produits);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const getProduitById = async (req,res,next) => {
    const id = req.params.id;
    try{
        let produit = await  produitModel.findById(id);
        res.status(200).send(produit);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}
const getProduitByCategorie = async (req,res,next) => {
    const idCategorie = req.params.idCategorie;
    try{
        let produit = await  produitModel.find({categorie : idCategorie});
        res.status(200).send(produit);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const updateProduit = async (req,res,next) => {
    const id = req.params.id;
    try{
        let produit = await  produitModel.findByIdAndUpdate(id,{$set : {...req.body}},{new : true});
        console.log("updated : ",produit)
        res.status(200).send(produit);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }

}

const deleteProduit = async (req,res,next) => {
    const id = req.params.id;
    try{
        let produit = await  produitModel.findByIdAndDelete(id);
        res.status(200).send(produit);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }

}

module.exports = {
    addProduit,
    getProduits,
    getProduitById,
    getProduitByCategorie,
    updateProduit,
    deleteProduit,
    getProduitsByPriceInterval,

}