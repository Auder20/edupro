const express = require('express');
const enrrolmentsController = require('../controllers/enrrolmentsController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use('/', authMiddleware, enrrolmentsController);

module.exports = router;
