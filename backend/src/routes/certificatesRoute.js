const express = require('express');
const certificatesController = require('../controllers/certificatesController');
const router = express.Router();

router.use('/', certificatesController);

module.exports = router;
