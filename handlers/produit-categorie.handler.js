const produitCategorieModel = require('../models/categorie.model');
const addProduitCategorie = async (req,res,next) => {
    const {nom,idType} = req.body;
    try{
        let produitCategorie = await new produitCategorieModel({nom,type:idType}).save();
        res.status(200).send(produitCategorie);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const getProduitCategories = async (req,res,next) => {
    try{
        let produitCategories = await  produitCategorieModel.find().populate('type');
        res.status(200).send(produitCategories);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const getProduitCategorieById = async (req,res,next) => {
    const id = req.params.id;
    try{
        let produitCategorie = await  produitCategorieModel.findById(id);
        res.status(200).send(produitCategorie);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const getProduitCategorieByType = async (req,res,next) => {
    const idType = req.params.idType;
    try{
        let produitCategorie = await  produitCategorieModel.find({type : idType}).populate('type');
        res.status(200).send(produitCategorie);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
}

const updateProduitCategorie = async (req,res,next) => {
    const id = req.params.id;
    console.log(req.body);
    console.log(id);    
    try{
        let produitCategorie = await  produitCategorieModel.findByIdAndUpdate(id,{$set : {...req.body}});
        res.status(200).send(produitCategorie);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }

}

const deleteProduitCategorie = async (req,res,next) => {
    const id = req.params.id;
    try{
        let produitCategorie = await  produitCategorieModel.findByIdAndDelete(id);
        res.status(200).send(produitCategorie);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }

}
module.exports = {
    addProduitCategorie,
    updateProduitCategorie,
    deleteProduitCategorie,
    getProduitCategorieById,
    getProduitCategorieByType,
    getProduitCategories
}