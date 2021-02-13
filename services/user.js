const User = require('../models/user');
const log = require('log4js').getLogger('user:service');

async function setUser({ email, password }) {
    const saved = await User.create({ email, password });
    log.debug(`User saved: ${email}`);
    return saved;
}

async function findUserByEmail(email) {
    const user = await User.findOne({ where: { email } });
    log.debug(`User found by email: ${ JSON.stringify(user) }`);
    return user;
}

async function findUserById(id) {
    const user = await User.findByPk(id);
    log.debug(`User found by id: ${ JSON.stringify(user) }`);
    return user;
}

module.exports = { setUser, findUserByEmail, findUserById };
