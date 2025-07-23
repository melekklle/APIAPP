const express = require('express');
const router = express.Router();

const serverUrl = "http://192.168.151.9:5000";

const gardeningData = {
  profile: [
    { image: `${serverUrl}/images/profile.jpg` },
  ],
  weather: {
    day: "Sunday",
    degree: "26°",
    degreemini: "20° / 30°",
  },
  shortcuts: [
    { id: 1, label: "My Garden", icon: "water-outline", isImage: false },
    { id: 2, label: "My Plants", icon: "flower-outline", isImage: false }
  ],
  banners: [
    { id: 1, image: `${serverUrl}/images/Garden.jpg`, title: "Create plans\nwith Gardening App", subtitle: "New in" },
    { id: 2, image: `${serverUrl}/images/bahce2.jpg`, title: "Track watering\nfor your plants", subtitle: "Daily Tip" }
  ],
  cards: [
    { id: 1, image: `${serverUrl}/images/kaktus.jpg`, title: "Cactus", isNew: true },
    { id: 2, image: `${serverUrl}/images/kaktus2.jpg`, title: "Cactus Red", isNew: false }
  ],
  plantscard: [] 
};

router.get('/', (req, res) => {
  res.json(gardeningData);
});

module.exports = router;
