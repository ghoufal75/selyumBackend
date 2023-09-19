const mongoose = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = require("express")();
const PORT = process.env.PORT | 3000;
const authRouter = require('./routes/auth.route');
const produitRouter = require('./routes/produit.route');
const produitTypeRouter = require('./routes/produit_type.route');
const commandeRoute = require('./routes/commande.router');
const produitCategorieRouter = require('./routes/produit_categorie.route');
app.use(cors());
app.use(bodyParser.json());
app.use('/commande',commandeRoute);
app.use('/auth',authRouter)
app.use('/produit',produitRouter);
app.use('/produitType',produitTypeRouter);
app.use('/produitCategorie',produitCategorieRouter);



app.listen(3000);