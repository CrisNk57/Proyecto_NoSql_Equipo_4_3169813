// server.js
require('dotenv').config(); // Asegúrate de que esta línea esté al inicio

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 1. Conexión a MongoDB
// Usamos process.env.MONGO_URI que definiremos en el archivo .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// 2. Inicializar Express
const app = express();

// 3. Middlewares
app.use(cors());
app.use(express.json()); // Necesario para leer JSON en las peticiones

// 4. Ruta de Prueba
app.get('/', (req, res) => {
  res.send('Servidor Express funcionando correctamente.');
});

// 5. Iniciar Servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor Express ejecutándose en http://localhost:${PORT}`);
});