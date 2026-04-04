const express = require('express');
const { QuizResult } = require('../models/mysql');
const { validateCourseId } = require('../middleware/validateParams.js');
const router = express.Router();

// Obtener resultados de quizzes de un curso
router.get('/:courseId', validateCourseId, async (req, res) => {
  try {
    const results = await QuizResult.findAll({ where: { courseId: parseInt(req.params.courseId) } });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching quiz results' });
  }
});

// Agregar resultado de quiz
router.post('/:courseId', validateCourseId, async (req, res) => {
  try {
    const result = await QuizResult.create({ ...req.body, courseId: parseInt(req.params.courseId) });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: 'Error creating quiz result' });
  }
});

module.exports = router;
