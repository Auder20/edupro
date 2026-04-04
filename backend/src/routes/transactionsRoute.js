const express = require('express');
const transactionsController = require('../controllers/transactionsController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use('/', authMiddleware, transactionsController);

module.exports = router;
