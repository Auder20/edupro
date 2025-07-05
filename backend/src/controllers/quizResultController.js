const express = require('express');
const QuizResult = require('../models/mongo/quizResult');
const router = express.Router();

// Obtener resultados de quizzes de un curso
router.get('/:courseId', async (req, res) => {
  try {
    const results = await QuizResult.find({ courseId: parseInt(req.params.courseId) });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Agregar resultado de quiz
router.post('/:courseId', async (req, res) => {
  try {
    const result = new QuizResult({ ...req.body, courseId: parseInt(req.params.courseId) });
    await result.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
