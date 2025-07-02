const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/mysql/user');

async function register({ name, email, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  return user;
}

async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Usuario no encontrado');
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Contraseña incorrecta');
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
  return { user, token };
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { register, login, verifyToken };
