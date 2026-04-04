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
const { errorHandler } = require('./src/middleware/errorMiddleware');
const pool = require('./src/config/mysql');
const { testMySQLConnection } = require('./src/config/mysql');
const sequelize = require('./src/config/mysql');


const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow non-browser agents
    
    // Allow localhost in development
    if (process.env.NODE_ENV !== 'production' && /^http:\/\/localhost:\d+$/.test(origin)) {
      return callback(null, true);
    }
    
    // Allow specific production domains from environment variable
    const allowedOrigins = process.env.ALLOWED_ORIGINS 
      ? process.env.ALLOWED_ORIGINS.split(',')
      : [];
    
    // Allow vercel.app subdomains by default
    if (/^https:\/\/.*\.vercel\.app$/.test(origin)) {
      return callback(null, true);
    }
    
    if (allowedOrigins.includes(origin)) {
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

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
app.use(compression());
app.use(express.json());

// Rate limiting global
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many authentication attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
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

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    // Check database connection
    await sequelize.authenticate();
    
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      database: 'connected'
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: 'Database connection failed'
    });
  }
});
app.use('/api/auth', authLimiter, require('./src/routes/authRoute'));
app.options('*', cors(corsOptions));
app.use('/api/users', require('./src/routes/userRoute'));
app.use('/api/courses', require('./src/routes/courseRoute'));
app.use('/api/enrollments', require('./src/routes/enrrolmentRoute'));
app.use('/api/certificates', authMiddleware, require('./src/routes/certificatesRoute'));
app.use('/api/transactions', require('./src/routes/transactionsRoute'));
app.use('/api/forum', require('./src/routes/forumRoute'));
app.use('/api/course-content', require('./src/controllers/courseContentController'));
app.use('/api/lesson-comments', require('./src/controllers/lessonCommentController'));
app.use('/api/quiz-results', require('./src/controllers/quizResultController'));
app.use('/api/activity-logs', require('./src/controllers/activityLogController'));

// Error handling middleware (must be last)
app.use(errorHandler);

(async () => {
  await testMySQLConnection();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    logger.info(`Servidor corriendo en puerto ${PORT}`);
  });
})();
