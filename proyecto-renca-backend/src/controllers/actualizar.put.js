const Usuario = require('../models/usuarioModel');

exports.updateUser = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  try {
    const usuario = await Usuario.findById(req.params.id);
    if (usuario) {
      usuario.nombre = nombre || usuario.nombre;
      usuario.correo = correo || usuario.correo;
      usuario.contraseña = contraseña || usuario.contraseña;
      await usuario.save();
      res.json(usuario);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
