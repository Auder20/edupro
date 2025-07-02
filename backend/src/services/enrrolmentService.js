const Enrollment = require('../models/mysql/Enrollment');

async function getAllEnrollments() {
  return await Enrollment.findAll();
}

async function getEnrollmentById(id) {
  return await Enrollment.findByPk(id);
}

async function createEnrollment(data) {
  return await Enrollment.create(data);
}

module.exports = { getAllEnrollments, getEnrollmentById, createEnrollment };
