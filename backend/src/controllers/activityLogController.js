const express = require('express');
const { Sequelize } = require('sequelize');
const { ActivityLog } = require('../models/mysql');
const router = express.Router();

// Obtener logs de actividad de un curso
router.get('/:courseId', async (req, res) => {
  try {
    const logs = await ActivityLog.findAll({
      where: Sequelize.where(Sequelize.fn('JSON_EXTRACT', Sequelize.col('metadata'), '$.courseId'), parseInt(req.params.courseId))
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Agregar log de actividad
router.post('/', async (req, res) => {
  try {
    const log = await ActivityLog.create(req.body);
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
