const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Curso', cursoSchema);
