const express = require("express");
const router = express.Router();

const listarUsuarioController = require("../controllers/listar.get.js");
const crearUsuarioController = require("../controllers/crear.post.js");
const actualizarUsuarioController = require("../controllers/actualizar.put.js");
const borrarUsuarioController = require("../controllers/borrar.delete.js");
const isAuth = require('../middlewares/validar-jwt.js');

// Ruta para listar usuarios
router.get("/listar-usuarios", listarUsuarioController.getUserById);

// Ruta para crear una tarea
router.post("/crear-usuario", crearUsuarioController.createUser);

// Ruta para actualizar una tarea
router.put("/actualizar-usuario/:id", actualizarUsuarioController.updateUser);

// Ruta para borrar una tarea
router.delete("/borrar-usuario/:id", borrarUsuarioController.deleteUser);


//requieran autenticación
router.get("/ruta-protegida", isAuth, (req, res) => {
    res.send("Ruta protegida");
});


module.exports = router;
