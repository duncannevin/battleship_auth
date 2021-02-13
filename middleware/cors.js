const  { SecurityConfig } = require('../config/config-factory');

function cors (req, res, next) {
    const whitelist = SecurityConfig.allowedHosts;
    const host = req.get('host');

    if (whitelist === '*') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        return next();
    }

    for (let i = 0; i < whitelist.length; i++) {
        const maybeHost = whitelist[i];

        if (host.includes(maybeHost)) {
            res.setHeader('Access-Control-Allow-Origin', host);
            return next();
        }
    }

    res.status(405).send();
}

module.exports = cors;
