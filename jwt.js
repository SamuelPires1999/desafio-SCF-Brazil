const jwt = require('jsonwebtoken')

function signJWT(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

function decodeJWT(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = { 
    signJWT,
    decodeJWT
}