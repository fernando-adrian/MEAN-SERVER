//rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers');

// api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProductos);

module.exports = router;