const express = require('express');
const transactionsController = require('../controllers/transactionsController');
const router = express.Router();

router.use('/', transactionsController);

module.exports = router;
