const express = require('express')
const router = express.Router()
const templatesController = require('../controllers/templatesController')


router.route('/formisu')
    .get(templatesController.getFormIsu)
router.route('/formkebutuhan')
    .get(templatesController.getFormKebutuhan)
router.route('/formpenilaian')
    .get(templatesController.getFormPenilaian)
router.route('/formkriteria')
    .get(templatesController.getFormKriteria)
router.route('/formpenggunaan')
    .get(templatesController.getFormPenggunaan)
router.route('/formperencanaan')
    .get(templatesController.getFormPerencanaan)
router.route('/formjenisaplikasienpi')
    .get(templatesController.getFormJenisAplikasi)


module.exports = router