const express = require('express');
const ActivityLog = require('../models/mongo/activityLogs');
const router = express.Router();

// Obtener logs de actividad de un curso
router.get('/:courseId', async (req, res) => {
  try {
    const logs = await ActivityLog.find({ 'metadata.courseId': parseInt(req.params.courseId) });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Agregar log de actividad
router.post('/', async (req, res) => {
  try {
    const log = new ActivityLog(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
