const app = require('../app')
const request = require('supertest')


describe('TESTE 1', () => {
    it('Should return all users', (done) => {
        request(app)
            .get("/users")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it("should return the right user given a name", (done) => {
        request(app)
            .get("/user")
            .query({
                name: "Ronaldo Nazario"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it("should get a 404 when the user isnt found", (done) => {
        request(app)
            .get("/user")
            .query({
                name: "Non Existent Name"
            })
            .set('Accept', 'application/json')
            .expect(404, done)
    })
})