const router = require("express").Router();
const commandehandler = require('../handlers/commande.handler');
const verifyUser = require('../middlewares/auth.middleware');
router.post('/',verifyUser,commandehandler.passerCommande);
router.post('/livrer',commandehandler.valideerLivraison);
router.get('/',commandehandler.getCommandes);
// router.patch('/',verifyUser,commandehandler);
module.exports = router;