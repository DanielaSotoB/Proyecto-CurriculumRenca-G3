// index.js
const app = require('./src/app/app'); // Importar la aplicación desde app.js


const port = 4000

// Escucha del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
