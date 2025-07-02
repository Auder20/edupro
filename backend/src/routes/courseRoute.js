const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

router.use('/', courseController);

module.exports = router;
