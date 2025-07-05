const express = require('express');
const LessonComment = require('../models/mongo/lessonsComments');
const router = express.Router();

// Obtener comentarios de lecciones de un curso
router.get('/:courseId', async (req, res) => {
  try {
    const comments = await LessonComment.find({ courseId: parseInt(req.params.courseId) });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Agregar comentario a una lección
router.post('/:courseId', async (req, res) => {
  try {
    const comment = new LessonComment({ ...req.body, courseId: parseInt(req.params.courseId) });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
