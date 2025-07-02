const User = require('../models/mysql/user');

async function getAllUsers() {
  return await User.findAll();
}

async function getUserById(id) {
  return await User.findByPk(id);
}

async function updateUser(id, data) {
  await User.update(data, { where: { id } });
  return getUserById(id);
}

async function deleteUser(id) {
  return await User.destroy({ where: { id } });
}

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };
