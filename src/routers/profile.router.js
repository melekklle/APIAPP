const express = require('express');
const router = express.Router();
const { saveProfile, getProfiles } = require('../controllers/profile.controller');

router.post('/', saveProfile);
router.get('/', getProfiles);

module.exports = router;
