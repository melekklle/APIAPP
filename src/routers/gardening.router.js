const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

const serverUrl = "http://192.168.151.9:5000"; 

const gardeningData = {
  profile: [
  { 
    image: `${serverUrl}/images/profile.jpg`, 
  },
  ],
  weather: {
    day: "Sunday",
    degree: "26°",
    degreemini: "20° / 30°"
  },
  shortcuts: [
    { id: 1, label: "My Garden", icon: "water-outline", isImage: false },
    { id: 2, label: "My Plants", icon: "flower-outline", isImage: false }
  ],
  banners: [
    { id: 1, image: `${serverUrl}/images/Garden.jpg`, title: "Create plans\nwith Gardening App", subtitle: "New in" },
    { id: 2, image: `${serverUrl}/images/bahce2.jpg`, title: "Track watering\nfor your plants", subtitle: "Daily Tip" },
    { id: 3, image: `${serverUrl}/images/Garden.jpg`, title: "Create plans\nwith Gardening App", subtitle: "New in" },
    { id: 4, image: `${serverUrl}/images/bahce2.jpg`, title: "Track watering\nfor your plants", subtitle: "Daily Tip" }
  ],
  cards: [
    { id: 1, image: `${serverUrl}/images/kaktus.jpg`, title: "Cactus", isNew: true },
    { id: 2, image: `${serverUrl}/images/kaktus2.jpg`, title: "Cactus Red", isNew: false },
    { id: 3, image: `${serverUrl}/images/cicek.jpg`, title: "Çiçek 1", isNew: true },
    { id: 4, image: `${serverUrl}/images/cicek4.jpg`, title: "Çiçek 2", isNew: false },
    { id: 5, image: `${serverUrl}/images/flowers.jpg`, title: "Çiçek 3", isNew: true },
    { id: 6, image: `${serverUrl}/images/cicek.jpg`, title: "Çiçek 4", isNew: false },
    { id: 7, image: `${serverUrl}/images/yaprak2.jpg`, title: "Çiçek 4", isNew: false }
  ],
  plantscard: [
    { id: "1", name: "Cactus", status: "Healthy", image: `${serverUrl}/images/kaktus.jpg`, progress: 0.9 },
    { id: "2", name: "Cactus Red", status: "Needs Water", image: `${serverUrl}/images/kaktus2.jpg`, progress: 0.2 }
  ]
};

router.get('/', (req, res) => {
  res.json(gardeningData);
});

module.exports = router;
