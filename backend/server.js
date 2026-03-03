require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const logger = require('./src/config/logger');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const authMiddleware = require('./src/middleware/authMiddleware');
const pool = require('./src/config/mysql');
const { testMySQLConnection } = require('./src/config/mysql');


const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow non-browser agents
    // Allow localhost or any vercel.app subdomain
    if (/^http:\/\/localhost:\d+$/.test(origin) || /^https:\/\/.*\.vercel\.app$/.test(origin)) {
      callback(null, true);
    } else {
      console.warn(`[CORS] Rejected origin: ${origin}`);
      callback(new Error('Not allowed by CORS (' + origin + ')'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(helmet());
app.use(compression());
app.use(express.json());

// Rate limiting global
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

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
app.use('/api/enrollments', require('./src/routes/enrrolmentRoute'));
app.use('/api/certificates', authMiddleware, require('./src/routes/certificatesRoute'));
app.use('/api/transactions', authMiddleware, require('./src/routes/transactionsRoute'));
app.use('/api/forum', authMiddleware, require('./src/routes/forumRoute'));
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
