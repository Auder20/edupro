const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.options('*', (req, res) => {
  res.sendStatus(200);
});

// Registro de usuario
// router.post('/register', authController.register);
// Login de usuario
// router.post('/login', authController.login);
// ...agrega aquí otras rutas de autenticación si las tienes...

module.exports = router;
