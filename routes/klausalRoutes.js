const express = require('express')
const router = express.Router()
const klausalController = require('../controllers/klausalController')


router.route('/formisus')
    .get(klausalController.getFormIsu)
    .post(klausalController.createFormIsu)
    .patch(klausalController.updateFormIsu)



module.exports = router