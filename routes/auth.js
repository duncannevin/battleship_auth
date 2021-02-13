const express = require('express');
const router = express.Router();

const { signJWT } = require('../middleware/jwt');
const { registerController, loginController } = require('../controllers/auth');

router.post('/register', registerController, signJWT);
router.post('/login', loginController, signJWT);

module.exports = router;
