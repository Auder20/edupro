const Forum = require('../models/mongo/forum');

async function getAllForums() {
  return await Forum.find();
}

async function getForumById(id) {
  return await Forum.findById(id);
}

async function createForum(data) {
  return await Forum.create(data);
}

module.exports = { getAllForums, getForumById, createForum };
