const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  const { nombre, correo, password } = req.body;

  const salt = bcrypt.genSaltSync();
  const passwordEncrypted = bcrypt.hashSync(password, salt);  
  
  try {
    const usuario = new Usuario({ nombre, correo, password: passwordEncrypted });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
