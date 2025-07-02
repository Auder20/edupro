const express = require('express');
const Forum = require('../models/mongo/forum');
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
    const forums = await Forum.find();
    res.json(forums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener foro por ID
router.get('/:id', async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum) return res.status(404).json({ error: 'Foro no encontrado' });
    res.json(forum);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar foro
router.put('/:id', async (req, res) => {
  try {
    const forum = await Forum.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!forum) return res.status(404).json({ error: 'Foro no encontrado' });
    res.json(forum);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar foro
router.delete('/:id', async (req, res) => {
  try {
    const forum = await Forum.findByIdAndDelete(req.params.id);
    if (!forum) return res.status(404).json({ error: 'Foro no encontrado' });
    res.json({ message: 'Foro eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
