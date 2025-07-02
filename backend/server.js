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
app.use('/api/users', require('./src/routes/userRoute'));
app.use('/api/courses', require('./src/routes/courseRoute'));
app.use('/api/certificates', require('./src/routes/certificatesRoute'));
app.use('/api/transactions', require('./src/routes/transactionsRoute'));
app.use('/api/forum', require('./src/routes/forumRoute'));

connectMySQL();
connectMongo();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
