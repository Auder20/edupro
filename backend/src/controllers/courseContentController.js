const express = require('express');
const CourseContent = require('../models/mongo/courseContent');
const router = express.Router();

// Obtener contenido del curso
router.get('/:courseId', async (req, res) => {
  try {
    const content = await CourseContent.findOne({ courseId: parseInt(req.params.courseId) });
    if (!content) return res.status(404).json({ error: 'Contenido no encontrado' });
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear o actualizar contenido del curso
router.post('/:courseId', async (req, res) => {
  try {
    const updated = await CourseContent.findOneAndUpdate(
      { courseId: parseInt(req.params.courseId) },
      { $set: req.body },
      { upsert: true, new: true }
    );
    res.status(201).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
