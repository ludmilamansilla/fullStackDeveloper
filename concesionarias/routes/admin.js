let express = require('express')
let router = express.Router()
let controller = require('../controllers/adminController')


router.get('/', controller.adminIndex)
router.get('/sucursales', controller.sucursales)
router.get('/agregarSucursal', controller.create)
router.post('/agregarSucursal', controller.store)
router.get('/editarSucursal/:id', controller.edit)
router.put('/editarSucursal/:id', controller.update)
router.delete('/eliminarSucursal/:id', controller.fatality)


module.exports = router