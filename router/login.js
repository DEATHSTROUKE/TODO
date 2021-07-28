const express = require('express')
const users = require('../models/users.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middlewares/authMiddleWare')
const router = express.Router()
let {generateAccessToken} = require('../config/generateAccessToken')


router.post('/login', async (req, res) => {
    let args = req.body;
    let {email, password} = args;
    console.log(email, password)
    await users.findOne({email: email})
        .then((user) => {
            console.log(user)
            if (user !== null) {
                const checkPassword = bcrypt.compareSync(password, user.password);
                if (!checkPassword) {
                    res.json({
                        type: 'login',
                        status: 'denied',
                        message: 'Wrong Password'
                    })
                }

                console.log(123);
                const token = generateAccessToken(user._id, user.role)
                console.log(token);
                res.json({
                    type: 'login',
                    status: 'success',
                    token: token
                })
            } else {
                res.json({
                    type: 'login',
                    status: 'denied',
                    message: 'User not found'
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })

})

router.get('/get-users', authMiddleware, async (req, res) => {
    const usersInDB = await users.find()
    res.json(usersInDB)
})

module.exports = router