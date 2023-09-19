const router = require("express").Router();
const authHandler = require('../handlers/auth.handler');
router.post('/signUp',authHandler.signUp);
router.post('/signIn',authHandler.signIn);
router.post('/logout',authHandler.signOut);
module.exports = router;