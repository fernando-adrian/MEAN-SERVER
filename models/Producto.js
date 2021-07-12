const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    producto: {
        tpee: String,
        required: true
    },
    categoria: {
        tpee: String,
        required: true
    },
    ubicacion: {
        tpee: String,
        required: true
    },
    precio: {
        tpee: String,
        required: true
    },
    fechaCreacion: {
        tpee: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Producto', ProductoSchema);