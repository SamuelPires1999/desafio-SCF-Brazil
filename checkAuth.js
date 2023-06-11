const fakeData = require("./fakeData")
const { decodeJWT } = require("./jwt")

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if(!token) {
        return res.send("No authorization token")
    }
    const payload = decodeJWT(token)

    const target = fakeData.find(item => item.name === payload.name)

    if(target.role !== "ADMIN") {
        return res.status(401).send("Action not authorized")
    }

    next()
}