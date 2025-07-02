const Certificate = require('../models/mysql/certificates');

async function getAllCertificates() {
  return await Certificate.findAll();
}

async function getCertificateById(id) {
  return await Certificate.findByPk(id);
}

async function createCertificate(data) {
  return await Certificate.create(data);
}

module.exports = { getAllCertificates, getCertificateById, createCertificate };
