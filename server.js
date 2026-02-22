const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());


try {
    const authRoutes = require('./routes/authRoutes');
    const productRoutes = require('./routes/productRoutes');

    console.log('¿authRoutes cargó bien?:', typeof authRoutes);
    console.log('¿productRoutes cargó bien?:', typeof productRoutes);

    app.use('/api/auth', authRoutes);
    app.use('/api/products', productRoutes);
} catch (error) {
    console.error(" Error crítico en archivos de rutas:", error.message);
}

app.get('/', (req, res) => res.send(' Servidor de Miguel Online'));

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
mongoose.connect(mongoURI)
    .then(() => console.log(' MongoDB Conectado'))
    .catch(err => console.log(' Error Mongo:', err.message));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
});