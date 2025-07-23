const mongoose = require('mongoose');
const Plant = require('./src/models/Plants');

const serverUrl = 'http://192.168.151.9:5000'; 

mongoose.connect('mongodb://localhost:27017/plants', {
}).then(async () => {
  console.log('MongoDB connected');

  await Plant.deleteMany({}); 

  const plants = [
    {
      name: 'Cactus',
      status: 'Healthy',
      image: `${serverUrl}/images/kaktus.jpg`,
      progress: 0.9
    },
    {
      name: 'Cactus Red',
      status: 'Needs Water',
      image: `${serverUrl}/images/kaktus2.jpg`,
      progress: 0.2
    }
  ];

  await Plant.insertMany(plants);

  console.log('Bitki verileri eklendi');
  mongoose.disconnect();
}).catch(console.error);
