const express = require('express')
const mongoose = require('mongoose')
let app = express()
const PORT = process.env.PORT || 3000

const db = require('./config/db').db
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DataBase connected')
    })
    .catch((err) => {
        console.log(err)
    })

app.use(express.json())

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
app.use((express.static(__dirname + 'static')))

app.use('/api', require('./router/registration.js'))
app.use('/api', require('./router/login.js'))
app.use('/api', require('./config/successForAllIp.js'))


app.listen(PORT, () => {
    console.log(`Сервер запустился на порте:${PORT}`)
})