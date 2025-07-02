const express = require('express');
const Certificate = require('../models/mysql/certificates');
const router = express.Router();

// Crear certificado
router.post('/', async (req, res) => {
  try {
    const certificate = await Certificate.create(req.body);
    res.status(201).json(certificate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los certificados
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.findAll();
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener certificado por ID
router.get('/:id', async (req, res) => {
  try {
    const certificate = await Certificate.findByPk(req.params.id);
    if (!certificate) return res.status(404).json({ error: 'Certificado no encontrado' });
    res.json(certificate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar certificado
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Certificate.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Certificado no encontrado' });
    const certificate = await Certificate.findByPk(req.params.id);
    res.json(certificate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar certificado
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Certificate.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Certificado no encontrado' });
    res.json({ message: 'Certificado eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
