const DataTypes = require("sequelize");
const sequelize = require("../config.js");

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        tableName: 'user',
        timeStamps: false
    }
);

module.exports = User;