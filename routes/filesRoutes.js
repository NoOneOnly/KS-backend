const express = require('express')
const router = express.Router()
const filesController = require('../controllers/filesController')


router.route('/')
    .get(filesController.getUserFiles)
router.route('/:id')
    .get(filesController.getFileByID)
router.route('/:id')
    .delete(filesController.deleteUserFiles)

module.exports = router