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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
