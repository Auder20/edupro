const express = require('express');
const cors = require('cors');
const connectMongo = require('./src/config/mongo');
const connectMySQL = require('./src/config/mysql');

const app = express();
app.use(cors()); // Permitir solicitudes del frontend
app.use(express.json()); // Parsear JSON

app.get('/', (req, res) => {
  res.send('¡Servidor backend funcionando!');
});
app.use('/api/auth', require('./src/controllers/authController'));
app.use('/api/courses', require('./src/controllers/courseController'));
app.use('/api/courses/:courseId/lessons', require('./src/controllers/lessonController'));
app.use('/api/courses/:courseId/lessons/:lessonTitle/comments', require('./src/controllers/commentsController'));
app.use('/api/courses/:courseId/lessons/:lessonTitle/quiz', require('./src/controllers/quizController'));
app.use('/api/courses/:courseId/lessons/:lessonTitle/quiz/results', require('./src/controllers/quizResultController'));
app.use('/api/courses/:courseId/forum', require('./src/controllers/forumController'));

connectMySQL();
connectMongo();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
