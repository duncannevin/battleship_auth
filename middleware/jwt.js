const jwt = require('jsonwebtoken');

const {JWTConfig} = require('../config/config-factory');

function signJWT(req, res) {
    req.body.token = jwt.sign(
        {id: req.body.id},
        JWTConfig.secret
    );
    res.send(req.body);
}

function verifyJWT(req, res, next) {
    try {
        const token = req.headers['authorization'];

        if (!token) {
            throw new Error('Missing header');
        }

        const bearerRemoved = token.replace('Bearer ', '');

        req.user = jwt.verify(bearerRemoved, JWTConfig.secret);
        next();
    } catch(err) {
        res.status(401).send();
    }
}

module.exports = {signJWT, verifyJWT};
