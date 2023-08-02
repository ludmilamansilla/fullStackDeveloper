let express = require('express')
let router = express.Router()
let controller = require('../controllers/autosController.js')

router.get('/', controller.autos)

module.exports = router