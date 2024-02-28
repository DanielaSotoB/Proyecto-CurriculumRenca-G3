const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('../routes/usuario.routes.js');
const cursosRoutes = require('../routes/cursos.routes.js');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/cursos_creados',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión a MongoDB establecida');
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
  });
})
.catch(err => console.error('Error al conectar a MongoDB:', err));

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/cursos', cursosRoutes);

module.exports = app;
