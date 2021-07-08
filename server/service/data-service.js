const DataSchema = require('../models/data-model')

class DataService {
    async contact(name, email, phone, message) {
        const data = await DataSchema.create({name, email, phone, message})
    }
}

module.exports = new DataService()