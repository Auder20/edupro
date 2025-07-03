// generateCertificate.js
//
// Este job se encarga de generar certificados para los estudiantes que han completado un curso.
// Puede ser ejecutado manualmente o programado con un scheduler (ej: node-cron).
//
// Autor: [Auder Gonzalez]
// Última actualización: 2025-07-03

const fs = require('fs');
const path = require('path');
const Certificate = require('../models/mysql/certificates');
const User = require('../models/mysql/user');
const Course = require('../models/mysql/course');
// Puedes agregar más modelos si es necesario

/**
 * Genera un certificado para un usuario y curso dados.
 * @param {number} userId
 * @param {number} courseId
 * @returns {Promise<void>}
 */
async function generateCertificate(userId, courseId) {
  try {
    // Obtener datos del usuario y curso
    const user = await User.findByPk(userId);
    const course = await Course.findByPk(courseId);
    if (!user || !course) throw new Error('Usuario o curso no encontrado');

    // Crear el certificado en la base de datos
    const cert = await Certificate.create({
      userId: user.id,
      courseId: course.id,
      dateIssued: new Date(),
      certificateUrl: `/certificates/${user.id}_${course.id}.pdf`
    });

    // Aquí podrías generar un PDF real usando una librería como pdfkit o puppeteer
    // Por ahora, solo simula la creación del archivo
    const certPath = path.join(__dirname, '../../certificates', `${user.id}_${course.id}.pdf`);
    fs.writeFileSync(certPath, `Certificado para ${user.name} en el curso ${course.title}`);

    console.log(`Certificado generado para ${user.name} en ${course.title}`);
  } catch (err) {
    console.error('Error generando certificado:', err.message);
  }
}

// Ejemplo de uso manual
// generateCertificate(1, 1);

module.exports = { generateCertificate };
