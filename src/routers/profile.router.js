const express = require('express');
const router = express.Router();
const { saveProfile } = require('../controllers/profile.controller');

router.post('/', saveProfile);

module.exports = router;
