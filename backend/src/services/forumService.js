const { Forum } = require('../models/mysql');

async function getAllForums() {
  return await Forum.findAll();
}

async function getForumById(id) {
  return await Forum.findByPk(id);
}

async function createForum(data) {
  return await Forum.create(data);
}

module.exports = { getAllForums, getForumById, createForum };
