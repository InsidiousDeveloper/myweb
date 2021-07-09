require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router/index')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json({extended: true}))
app.use(cors())
app.use('/', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`))
    } catch (e) {
        console.log(e.message)
    }
}

start()