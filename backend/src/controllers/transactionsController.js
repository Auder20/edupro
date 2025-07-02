const express = require('express');
const { Transaction } = require('../models/mysql');
const router = express.Router();

// Crear transacción
router.post('/', async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las transacciones
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener transacción por ID
router.get('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Transacción no encontrada' });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar transacción
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Transaction.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Transacción no encontrada' });
    const transaction = await Transaction.findByPk(req.params.id);
    res.json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar transacción
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Transaction.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Transacción no encontrada' });
    res.json({ message: 'Transacción eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
