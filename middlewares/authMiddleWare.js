const jwt = require('jsonwebtoken')
// const {secret} = require('../config/secretKeyJWT.js')
console.log(require('../config/secretKeyJWT.js'))
module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        // console.log(require('../config/secretKeyJWT.js').secretKey)
        const secret = require('../config/secretKeyJWT.js').secretKey
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({
                message: 'Пользователь неавторизирован'
            })
        }
        console.log(secret)
        const decodeData = jwt.verify(token, secret)
        req.user = decodeData
        next()
    } catch (err) {
        console.log(err)
        return res.status(403).json({
            message: 'Пользователь неавторизован'
        })
    }
}