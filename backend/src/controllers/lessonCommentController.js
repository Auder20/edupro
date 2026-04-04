const express = require('express');
const { LessonComment } = require('../models/mysql');
const { validateCourseId } = require('../middleware/validateParams.js');
const router = express.Router();

// Obtener comentarios de lecciones de un curso
router.get('/:courseId', validateCourseId, async (req, res) => {
  try {
    const comments = await LessonComment.findAll({ where: { courseId: parseInt(req.params.courseId) } });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching lesson comments' });
  }
});

// Agregar comentario a una lección
router.post('/:courseId', validateCourseId, async (req, res) => {
  try {
    const comment = await LessonComment.create({ ...req.body, courseId: parseInt(req.params.courseId) });
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: 'Error creating lesson comment' });
  }
});

module.exports = router;
