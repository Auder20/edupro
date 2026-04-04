const express = require('express');
const { Transaction } = require('../models/mysql');
const { validateId } = require('../middleware/validateParams.js');
const router = express.Router();

// Crear transacción
router.post('/', async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: 'Error creating transaction' });
  }
});

// Obtener todas las transacciones
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching transactions' });
  }
});

// Obtener transacción por ID
router.get('/:id', validateId, async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id);
    if (!transaction) return res.status(404).json({ error: 'Transacción no encontrada' });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching transaction' });
  }
});

// Actualizar transacción
router.put('/:id', validateId, async (req, res) => {
  try {
    const [updated] = await Transaction.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Transacción no encontrada' });
    const transaction = await Transaction.findByPk(req.params.id);
    res.json(transaction);
  } catch (err) {
    res.status(400).json({ error: 'Error updating transaction' });
  }
});

// Eliminar transacción
router.delete('/:id', validateId, async (req, res) => {
  try {
    const deleted = await Transaction.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Transacción no encontrada' });
    res.json({ message: 'Transacción eliminada' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting transaction' });
  }
});

module.exports = router;
