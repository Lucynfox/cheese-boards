const { User } = require('../models')

describe("Testing User Model", () => {
    const user = User.build({ name: "John Smith", email: "johnsmith@gmail.com"})
    test("Test that user.email is a string", () => {
        expect(typeof user.name).toBe("string")
    })
    test("Test that user.name is a string", async () => {
        const err = await User.create({ name: 444, email: 222}).catch( (e) => {
            return 'error'
        })
        expect(err).toEqual('error')
    })

    test("Test user.email is a string", () => {
        expect(typeof user.email).toBe("string")
    })
    
    test("Test user.email is a string", async () => {
        const err = await User.create({ name: 444, email: 222}, {validate: true}).catch( (e) => {
            return 'error'
        })
        expect(err).toEqual('error')
    })
})