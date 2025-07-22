require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

require('./src/db/dbConnection');

app.use(cors());
app.use(express.json());


app.use('/images', express.static('public/images'));

const profileRouter = require('./src/routers/profile.router');
const gardeningRouter = require('./src/routers/gardening.router');

app.use('/api/profile', profileRouter);
app.use('/api/gardening', gardeningRouter);

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server ${port} portunda çalışıyor`);
});

