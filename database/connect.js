const { Sequelize } = require('sequelize');
const { DBConfig } = require('../config/config-factory');
const log = require('log4js').getLogger('db');

const db = new Sequelize(
    DBConfig.name,
    DBConfig.user,
    DBConfig.password,
    {
        host: DBConfig.host,
        dialect: 'mysql',
        logging: msg => log.debug(msg)
    },
);

async function testConnection() {
    try {
        await db.authenticate();
        log.debug(`DB connected a..okay`);
    } catch (e) {
        log.error(`DB not running`);
        process.exit(1);
    }
}

module.exports = { testConnection };
