const { findUserById } = require('../services/user');
const { handleError } = require('./error');

async function fetchUserController(req, res) {
    try {
        const {dataValues: {id, email, createdAt}} = await findUserById(req.user.id);
        res.send({ id, email, createdAt });
    } catch (e) {
        handleError(e, req, res);
    }
}

module.exports = { fetchUserController };
