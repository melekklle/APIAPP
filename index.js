require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// MongoDB bağlantısı
require('./src/db/dbConnection');

// Middleware
app.use(cors());
app.use(express.json());

// Router
const profileRouter = require('./src/routers/profile.router');
app.use('/api/profile', profileRouter);

// Server başlatma
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
