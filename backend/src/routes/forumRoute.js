const express = require('express');
const forumController = require('../controllers/forumController');
const router = express.Router();

router.use('/', forumController);

module.exports = router;
