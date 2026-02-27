const { Course } = require('../models/mysql');

// Crear curso
const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todos los cursos
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener curso por ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar curso
const updateCourse = async (req, res) => {
  try {
    const [updated] = await Course.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Curso no encontrado' });
    const course = await Course.findByPk(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar curso
const deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json({ message: 'Curso eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};
