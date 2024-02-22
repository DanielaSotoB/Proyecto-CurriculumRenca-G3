// index.js
const app = require('./src/app/app'); // Importar la aplicación desde app.js


const port = 4000// Usar el mismo puerto que en app.jsconst port = process.env.PORT || 4000;

// Escucha del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
