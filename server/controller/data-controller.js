const dataService = require('../service/data-service')

class DataController {
    async contact(req, res, next) {
        try {
            const {name, email, phone, message} = req.body
            const sendingData = await dataService.contact(name, email, phone, message)

            res.status(200).json({message: 'Message successfully sent'})
        } catch (e) {
            console.log(e.message)
        }
    }
}

module.exports = new DataController()