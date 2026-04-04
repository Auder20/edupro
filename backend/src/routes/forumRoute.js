const express = require('express');
const forumController = require('../controllers/forumController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use('/', authMiddleware, forumController);

module.exports = router;
