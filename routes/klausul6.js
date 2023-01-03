const express = require('express')
const router = express.Router()
const klausul6Controller = require('../controllers/klausul6Controller')


router.route('/')
    .get(klausul6Controller.getAllKlausul)
    .post(klausul6Controller.createNewKlausul)


module.exports = router