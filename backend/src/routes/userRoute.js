const express = require('express');
const userController = require('../controllers/userController.js');
const auth = require('../middleware/authMiddleware.js');
const { validate, registerSchema, loginSchema } = require('../middleware/validate.js');
const { isAdmin } = require('../middleware/roleMiddleware.js');

const router = express.Router();

// Public routes
router.post('/register', validate(registerSchema), userController.register);
router.post('/login', validate(loginSchema), userController.login);

// Protected routes
router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, userController.updateProfile);
router.delete('/profile', auth, userController.deleteAccount);

// Admin only routes
router.get('/', auth, isAdmin, userController.getAllUsers);

module.exports = router;
