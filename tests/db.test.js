const db = require('../db/db')
const { Sequelize } = require('sequelize')

describe("Test db config sets up correctly:", () => {
    test("Test sequelize db", () => {
        expect(db).toBeInstanceOf(Sequelize)
    })
})