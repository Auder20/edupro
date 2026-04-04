const express = require('express');
const { Enrollment } = require('../models/mysql');
const { validateId } = require('../middleware/validateParams.js');
const router = express.Router();

// Crear inscripción
router.post('/', async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: 'Error creating enrollment' });
  }
});

// Obtener todas las inscripciones
router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching enrollments' });
  }
});

// Obtener inscripción por ID
router.get('/:id', validateId, async (req, res) => {
  try {
    const enrollment = await Enrollment.findByPk(req.params.id);
    if (!enrollment) return res.status(404).json({ error: 'Inscripción no encontrada' });
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching enrollment' });
  }
});

// Actualizar inscripción
router.put('/:id', validateId, async (req, res) => {
  try {
    const [updated] = await Enrollment.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Inscripción no encontrada' });
    const updatedEnrollment = await Enrollment.findByPk(req.params.id);
    res.json(updatedEnrollment);
  } catch (err) {
    res.status(400).json({ error: 'Error updating enrollment' });
  }
});

// Eliminar inscripción
router.delete('/:id', validateId, async (req, res) => {
  try {
    const deleted = await Enrollment.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Inscripción no encontrada' });
    res.json({ message: 'Inscripción eliminada' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting enrollment' });
  }
});

module.exports = router;
