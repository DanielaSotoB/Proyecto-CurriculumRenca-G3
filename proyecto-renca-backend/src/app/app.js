// app.js
const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('../routes/usuario.routes.js');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/registro_usuarios', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB establecida'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

app.use('/api/usuarios', usuarioRoutes);

module.exports = app; 
