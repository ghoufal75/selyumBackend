const jwt = require('jsonwebtoken');
const clientModel = require('../models/client.model');
const verifyToken = async (req,res,next)=>{
    const token = req.headers['authorization'].split(" ")[1];
    if(!token){
        res.status(401).send({error : "No token provided."});
        return;
    }
    let result = await jwt.verify(token,"This is mysecret keyn don't guess it");
    if(!result){
        res.status(401).send({error : "Invalid Token."});
        return;
    }
    let connectedUser = await clientModel.findById(result.user);
    req.user = connectedUser;
    next();
}

module.exports = verifyToken;

