require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router/index')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json({extended: true}))
app.use(cors())
app.use('/', router)

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