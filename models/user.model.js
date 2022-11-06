const db = require('../db/db')
const { DataTypes, Model } = require('sequelize')

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    }
}, {sequelize: db})

module.exports = { User }