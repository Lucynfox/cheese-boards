const { Cheese } = require('../models')

describe("Test Cheese Model", () => {
    const cheese = Cheese.build({ title: 'blue', description: 'desc'})

    test("Test cheese.title is a string", () => {
        expect(typeof cheese.title).toBe('string')
    })

    test("Test cheese.description is a string", async () => {
       const err = await Cheese.create({ title: 45, description: 456}).catch( (e) => {
           return 'error'
       })
       expect(err).toEqual('error')
    })

    test("Test cheese.title is a string", () => {
        expect(typeof cheese.title).toBe('string')
    })

    test("Test cheese.description is a string", async () => {
        const err = await Cheese.create({ title: 45, description: 456}).catch( (e) => {
            return 'error'
        })
        expect(err).toEqual('error')
    })
})