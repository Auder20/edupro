const express = require('express');
const { Forum } = require('../models/mysql');
const router = express.Router();

// Crear foro para un curso
router.post('/', async (req, res) => {
  try {
    const forum = await Forum.create(req.body);
    res.status(201).json(forum);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los foros
router.get('/', async (req, res) => {
  try {
    const forums = await Forum.findAll();
    res.json(forums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener foro por ID
router.get('/:id', async (req, res) => {
  try {
    const forum = await Forum.findByPk(req.params.id);
    if (!forum) return res.status(404).json({ error: 'Foro no encontrado' });
    res.json(forum);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar foro
router.put('/:id', async (req, res) => {
  try {
    const forum = await Forum.findByPk(req.params.id);
    if (!forum) return res.status(404).json({ error: 'Foro no encontrado' });
    await forum.update(req.body);
    res.json(forum);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar foro
router.delete('/:id', async (req, res) => {
  try {
    const forum = await Forum.findByPk(req.params.id);
    if (!forum) return res.status(404).json({ error: 'Foro no encontrado' });
    await forum.destroy();
    res.json({ message: 'Foro eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener foro de un curso por courseId
router.get('/by-course/:courseId', async (req, res) => {
  try {
    const forum = await Forum.findOne({ where: { courseId: parseInt(req.params.courseId) } });
    if (!forum) return res.status(404).json({ error: 'Foro no encontrado' });
    res.json(forum);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear o actualizar foro de un curso por courseId
router.post('/by-course/:courseId', async (req, res) => {
  try {
    const courseId = parseInt(req.params.courseId);
    let forum = await Forum.findOne({ where: { courseId } });
    if (forum) {
      forum = await forum.update(req.body);
    } else {
      forum = await Forum.create({ ...req.body, courseId });
    }
    res.status(201).json(forum);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
