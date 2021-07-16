const express = require('express')
const users = require('../models/users.js')

const router = express.Router()

router.get('/login', async (req, res) => {
    let args = req.body;
    let {email, password} = args;
    await users.findOne({email: email})
        .then((user) => {
            console.log(user)

        })
        .catch((err) => {
            console.log(err)
        })

})