const Curso = require('../models/cursoModel');

exports.getCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCurso = async (req, res) => {
  const curso = new Curso({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    image: req.body.image
  });
  try {
    const nuevoCurso = await curso.save();
    res.status(201).json(nuevoCurso);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
