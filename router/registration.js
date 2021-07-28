const express = require('express')
const users = require('../models/users')
const bcrypt = require('bcrypt')
const router = express.Router()
const cors = require('cors')

const corsOptions = {
    origin: '*',
    methods: [],
    allowedHeaders: [],
    exposedHeaders: [],
    credentials: true
};
router.post('/registration', cors(corsOptions), async (req, res) => {

    // console.log(req.body)


    let args = req.body;
    let {user, email, password} = args
    let hashPassword = await bcrypt.hash(password, 8);
    let checkRegistration
    // console.log(user, email, password)
    // console.log(hashPassword);
    // console.log(await users.findOne({email: email}))
    await users.findOne({email: email}) === null ? checkRegistration = true : checkRegistration = false;
    console.log(checkRegistration);
    if (checkRegistration) {
        await users.create({
            name: user,
            email: email,
            password: hashPassword
        })
        console.log('Пользователь не был зарегистрирован')
        res.json({
            type: 'registration',
            status: 'success'
        });
    } else {
        res.json({
            type: 'registration',
            status: 'denied'
        })
        console.log('Пользователь был зарегистрирован')
    }
})


module.exports = router