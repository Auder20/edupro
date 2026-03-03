const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.options('*', (req, res) => {
  res.sendStatus(200);
});

// Registro de usuario
router.post('/register', userController.register);
// Login de usuario
router.post('/login', userController.login);
// ...agrega aquí otras rutas de autenticación si las tienes...

module.exports = router;
