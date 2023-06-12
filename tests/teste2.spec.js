const app = require('../app')
const request = require('supertest')

describe('TESTE 2', () => {
    it('Should add a new user with given body properties', (done) => {
        request(app)
            .post("/users")
            .set('Accept', 'application/json')
            .send({
                id: 30,
                name: "Test subject",
                job: "test subject"
            })
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it("should get a 400 when trying to add with wrong types", (done) => {
        request(app)
            .post("/users")
            .send({
                id: "wrong type",
                name: 10,
            })
            .set('Accept', 'application/json')
            .expect(400, done)
    })
})