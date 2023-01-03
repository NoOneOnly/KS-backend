const express = require('express')
const router = express.Router()
const klausul5Controller = require('../controllers/klausul5Controller')


router.route('/')
    .get(klausul5Controller.getAllKlausul)
    .post(klausul5Controller.createNewKlausul)


module.exports = router