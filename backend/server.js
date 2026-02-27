require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const logger = require('./src/config/logger');
const cors = require('cors');
const pool = require('./src/config/mysql');
const { testMySQLConnection } = require('./src/config/mysql');


const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(helmet());
app.use(compression());
app.use(express.json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ejemplo de logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('¡Servidor backend funcionando!');
});
app.use('/api/auth', require('./src/routes/authRoute'));
(app.options('*', cors(corsOptions)));
app.use('/api/users', require('./src/routes/userRoute'));
app.use('/api/courses', require('./src/routes/courseRoute'));
app.use('/api/certificates', require('./src/routes/certificatesRoute'));
app.use('/api/transactions', require('./src/routes/transactionsRoute'));
app.use('/api/forum', require('./src/routes/forumRoute'));
app.use('/api/course-content', require('./src/controllers/courseContentController'));
app.use('/api/lesson-comments', require('./src/controllers/lessonCommentController'));
app.use('/api/quiz-results', require('./src/controllers/quizResultController'));
app.use('/api/activity-logs', require('./src/controllers/activityLogController'));

(async () => {
  await testMySQLConnection();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    logger.info(`Servidor corriendo en puerto ${PORT}`);
  });
})();
