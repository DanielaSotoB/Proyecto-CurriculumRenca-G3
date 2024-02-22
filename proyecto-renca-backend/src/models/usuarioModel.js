// models/usuarioModel.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true // asegura que cada correo sea único
  },
  contraseña: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
