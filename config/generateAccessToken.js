const jwt = require('jsonwebtoken')
const {secretKey} = require('./secretKeyJWT')
module.exports = {
    generateAccessToken: function (id, roles) {
        const payload = {
            id,
            roles
        }
        return jwt.sign(payload, secretKey, {expiresIn: "24h"})
    }
}