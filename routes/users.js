const express = require('express');
const router = express.Router();

const { verifyJWT } = require('../middleware/jwt');
const { fetchUserController } = require('../controllers/user');

router.get('/', verifyJWT, fetchUserController);

module.exports = router;
