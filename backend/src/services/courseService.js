const Course = require('../models/mysql/course');

async function getAllCourses() {
  return await Course.findAll();
}

async function getCourseById(id) {
  return await Course.findByPk(id);
}

async function createCourse(data) {
  return await Course.create(data);
}

async function updateCourse(id, data) {
  await Course.update(data, { where: { id } });
  return getCourseById(id);
}

async function deleteCourse(id) {
  return await Course.destroy({ where: { id } });
}

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
