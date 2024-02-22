// app.js
const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('../routes/usuario.routes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/registro_usuarios', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB establecida'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

app.use('/usuarios', usuarioRoutes);

module.exports = app; 
