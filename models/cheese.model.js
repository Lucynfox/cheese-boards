const db = require('../db/db')
const { DataTypes, Model } = require('sequelize')

const Cheese = db.define('Cheese', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        },
    description: {
        type: DataTypes.STRING,
    }
}, {sequelize: db})

module.exports = { Cheese }