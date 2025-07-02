const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'EduPro API',
      version: '1.0.0',
      description: 'Documentación de la API de EduPro',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Rutas donde se documentan los endpoints
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
