const express = require('express');
const { CourseContent } = require('../models/mysql');
const { validateCourseId } = require('../middleware/validateParams.js');
const router = express.Router();

// Obtener contenido del curso
router.get('/:courseId', validateCourseId, async (req, res) => {
  try {
    const content = await CourseContent.findOne({ where: { courseId: parseInt(req.params.courseId) } });
    if (!content) return res.status(404).json({ error: 'Contenido no encontrado' });
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching course content' });
  }
});

// Crear o actualizar contenido del curso
router.post('/:courseId', validateCourseId, async (req, res) => {
  try {
    const courseId = parseInt(req.params.courseId);
    let content = await CourseContent.findOne({ where: { courseId } });
    if (content) {
      content = await content.update(req.body);
    } else {
      content = await CourseContent.create({ ...req.body, courseId });
    }
    res.json(content);
  } catch (err) {
    res.status(400).json({ error: 'Error creating/updating course content' });
  }
});

module.exports = router;
