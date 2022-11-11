const express = require('express')
const router = express.Router()
const manualbookController = require('../controllers/manualbookController')


router.route('/')
    .get(manualbookController.getAllManualBook)


module.exports = router