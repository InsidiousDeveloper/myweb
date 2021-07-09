const Router = require('express').Router
const {check} = require('express-validator')
const dataController = require('../controller/data-controller')

const router = new Router()

router.post(
    '/contact',
    [
        check('name').not().isEmpty().trim(),
        check('email').isEmail().normalizeEmail(),
        check('phone').trim(),
        check('message').not().isEmpty().trim().escape()
    ],
    dataController.contact)

module.exports = router