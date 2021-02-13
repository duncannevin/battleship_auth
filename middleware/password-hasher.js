const md5 = require('md5');

function passwordHasher(req, res, next) {
    if (typeof req.body === 'object' && req.body.hasOwnProperty('password')) {
        req.body = { ...req.body, password: md5(req.body.password) };
    }

    next();
}

module.exports = passwordHasher;
