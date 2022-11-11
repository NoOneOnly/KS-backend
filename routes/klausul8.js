const express = require('express')
const router = express.Router()
const klausul8Controller = require('../controllers/klausul8Controller')


router.route('/')
    .get(klausul8Controller.getAllKlausul)
    .post(klausul8Controller.createNewKlausul)


module.exports = router