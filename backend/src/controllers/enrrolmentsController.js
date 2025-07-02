const express = require('express');
const Enrollment = require('../models/mysql/Enrollment');
const router = express.Router();

// Crear inscripción
router.post('/', async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las inscripciones
router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener inscripción por ID
router.get('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByPk(req.params.id);
    if (!enrollment) return res.status(404).json({ error: 'Inscripción no encontrada' });
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar inscripción
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Enrollment.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Inscripción no encontrada' });
    const updatedEnrollment = await Enrollment.findByPk(req.params.id);
    res.json(updatedEnrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar inscripción
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Enrollment.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Inscripción no encontrada' });
    res.json({ message: 'Inscripción eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
