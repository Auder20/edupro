const express = require('express');
const enrrolmentsController = require('../controllers/enrrolmentsController');
const router = express.Router();

router.use('/', enrrolmentsController);

module.exports = router;
