const commandeModel = require("../models/commande_produits.model");
const produitModel = require('../models/produit.model').model;
const sendEmail = require("../utils/email-sender");

const passerCommande = async (req,res,next) => {
    const {produits} = req.body;
    console.log(produits);
    let user = req.user;
    console.log("User : ",user);
    try{
        for await (let el of produits){
            await produitModel.findByIdAndUpdate(el.product._id,{$inc:{stock : -el.quantity}});
        }
        console.log(produits);
        await new commandeModel({produits,client : user._id}).save();

        res.status(200).json({message : "Commande effectué."});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
   

}

const valideerLivraison = async (req,res,next) => {
    let id = req.params.id;

    const {client,date} = req.body;

    try{
        await commandeModel.findByIdAndUpdate(id,{$set : {status : "livré"}});
        let message = 
        `Bonjour ${client.fullName}.
         Nous tenons à vous informer que vous receverez 
         vos produits le ${date}. 
         Nous vous remercions d'avoir choisi Selyum. `
        await sendEmail(client.email,message);
        res.status(200).send();
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

const getCommandes = async (req,res) => {
    try{
        let commandes =  await commandeModel.find().populate('client').populate("produits.product");
        res.status(200).send(commandes);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

module.exports = {
    getCommandes,
    passerCommande,
    valideerLivraison,
    

};