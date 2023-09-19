const router = require("express").Router();
const produitHandler = require('../handlers/produit-categorie.handler');
router.post('/',produitHandler.addProduitCategorie);
router.get('/',produitHandler.getProduitCategories);
router.get('/:id',produitHandler.getProduitCategorieById);
router.get('/type/:idType',produitHandler.getProduitCategorieByType);
router.patch('/:id',produitHandler.updateProduitCategorie);
router.delete('/:id',produitHandler.deleteProduitCategorie);
module.exports = router;