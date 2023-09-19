const router = require("express").Router();
const produitHandler = require('../handlers/produit-type.handler');
router.post('/',produitHandler.addProduitType);
router.get('/',produitHandler.getProduitTypes);
router.get('/:id',produitHandler.getProduitTypeById);
router.patch('/:id',produitHandler.updateProduitType);
router.delete('/:id',produitHandler.deleteProduitType);
module.exports = router;