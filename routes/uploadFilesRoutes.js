const express = require('express')
const router = express.Router()
const uploadController = require('../controllers/uploadController')
const verifyJWT = require('../middleware/verifyJWT')


// router.use(verifyJWT)

router.route('/')
    .post(uploadController.uploadFile)
    .get(uploadController.getAllFiles)
    .delete(uploadController.deleteFile)

module.exports = router