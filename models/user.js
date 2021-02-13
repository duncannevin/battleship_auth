const {DataTypes, Model} = require('sequelize');
const db = require('../database');
const log = require('log4js').getLogger('db:user');
const { v4: uuid } = require('uuid');

class User extends Model {
}

User.init({
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.UUID
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    sequelize: db,
    modelName: 'User',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
    indexes: [
        {
            unique: true,
            fields: ['email', 'id']
        }
    ]
});

User.beforeCreate(user =>  user.id = uuid());

async function syncUser() {
    try {
        await User.sync();
        log.debug('User model synced');
    } catch (e) {
        log.error(`User model failed to sync: ${e}`);
        process.exit(1);
    }
}

syncUser();

module.exports = User;
