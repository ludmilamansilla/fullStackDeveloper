let express = require('express');
let router = express.Router();
let controller = require('../controllers/sucursalesController')

router.get('/:id', controller.sucursal);

module.exports = router;
