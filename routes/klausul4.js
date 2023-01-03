const express = require('express')
const router = express.Router()
const klausul4Controller = require('../controllers/klausul4Controller')


router.route('/')
    .get(klausul4Controller.getAllKlausul)
    .post(klausul4Controller.createNewKlausul)


module.exports = router