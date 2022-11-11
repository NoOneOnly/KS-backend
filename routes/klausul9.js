const express = require('express')
const router = express.Router()
const klausul9Controller = require('../controllers/klausul9Controller')


router.route('/')
    .get(klausul9Controller.getAllKlausul)
    .post(klausul9Controller.createNewKlausul)


module.exports = router