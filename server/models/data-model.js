const {Schema, model} = require('mongoose')

const DataSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String},
    message: {type: String, required: true},
    date: {type: Date, default: Date.now, required: true}
})

module.exports = model('DataSchema', DataSchema)