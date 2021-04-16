const {setUser, findUserByEmail} = require('../services/user');
const {handleError} = require('./error');

async function registerController(req, res, next) {
    try {
        const {dataValues: {id, email, createdAt}} = await setUser(req.body);
        req.body = {id, email, createdAt};
        next();
    } catch (e) {
        handleError(e, req, res);
    }
}

async function loginController(req, res, next) {
    try {
        const user = await findUserByEmail(req.body.email);

        if (!user) {
            throw new Error('Not Found');
        }

        const {dataValues: {id, email, createdAt, password}} = user;

        if (password !== req.body.password) {
            throw new Error('Unauthorized');
        }

        req.body = {id, email, createdAt};

        next();
    } catch (e) {
        handleError(e, req, res);
    }
}

module.exports = {registerController, loginController};
