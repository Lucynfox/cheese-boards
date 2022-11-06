const db = require('../db/db')
const { DataTypes, Model } = require('sequelize')

const Board = db.define("Board", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 3
    }
}, {sequelize: db})

module.exports = Board;