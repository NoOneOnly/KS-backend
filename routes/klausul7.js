const express = require('express')
const router = express.Router()
const klausul7Controller = require('../controllers/klausul7Controller')


router.route('/')
    .get(klausul7Controller.getAllKlausul)
    .post(klausul7Controller.createNewKlausul)


module.exports = router