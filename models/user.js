const {
    DataTypes
} = require('sequelize')
const db = require('../database')

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama: DataTypes.STRING(80),
    jk: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(255),
    },
})

module.exports = User