const { Board } = require('../models')

describe("Test Board Model", () => {
    const board = Board.build({ type: '_type_', description: 'desc', rating: 8})

    test("Test board.type is a string", () => {
        expect(typeof board.type).toBe("string")
    })

    test("Test board.type is a string", async () => {

        const err = await Board.create({ type: 55, description: 456, rating: 'eight'}).catch( (e) => {
            return 'error'
        })
        expect(err).toEqual('error')
    })

    test("Test board.description is a string", () => {
        expect(typeof board.description).toBe("string")
    })

    test("Test board.description is a string", async () => {
        const err = await Board.create({ type: 55, description: 456, rating: 'eight'}).catch( (e) => {
            return 'error'
        })
        expect(err).toEqual('error')
    })

    test("Test board.rating is a number", () => {
        expect(typeof board.rating).toBe("number")
    })

    test("Test board.rating is a number", async () => {
        const err = await Board.create({ type: 55, description: 456, rating: 'eight'}).catch( (e) => {
            return 'error'
        })
        expect(err).toEqual('error')
    })
})