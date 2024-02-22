const Usuario = require('../models/usuarioModel');

exports.createUser = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  
  try {
    const usuario = new Usuario({ nombre, correo, contraseña });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
