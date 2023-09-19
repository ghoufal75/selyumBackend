const clientModel= require('../models/client.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signIn = async (req,res,next)=>{
   const {email,password} = req.body;
   try{
        let user = await clientModel.findOne({email});
        if(!user){
            res.status(404).json({error : "Usern not found."});
            return;
        }
        if(await bcrypt.compare(password,user.password)){
            let token = jwt.sign({user : user['_id']},"This is mysecret keyn don't guess it",{expiresIn:3600});
            res.status(200).send({token});
        }
        else{
            res.status(400).json({error : 'Incorrect password.'});
        } 
   }
   catch(err){
    console.log(err);   
    res.status(500).send({error : err});
   }
}

const signUp = async (req,res,next) =>{
    const {fullName,email,password,phoneNumber,adresse} = req.body;
    try{
        let hashedPassword = await bcrypt.hash(password,12);
        await new clientModel({fullName,email,password : hashedPassword,phoneNumber,adresse}).save();
        res.status(200).send({message : "User created succesfully"});
    }
    catch(err){
        conosle.log(err);
        res.status(500).json({error : err})
    }
} 

const signOut = (req,res,next)=>{

}

module.exports = {
    signIn,
    signUp,
    signOut,
}