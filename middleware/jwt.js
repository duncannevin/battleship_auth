const jwt = require('jsonwebtoken');

const {JWTConfig} = require('../config/config-factory');

function signJWT(req, res) {
    req.body.token = jwt.sign(
        {id: req.id},
        JWTConfig.secret
    );
    res.send(req.body);
}

function verifyJWT(req, res, next) {
    try {
        const token = req.headers.get('Authorization');
        if (!token) {
            throw new Error('Missing header');
        }
        req.user = jwt.verify(token, JWTConfig.secret);
    } catch(err) {
        req.status(401).send();
    }
}

module.exports = {signJWT};
