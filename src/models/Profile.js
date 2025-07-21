const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  telephone: { type: String, required: true, trim: true },
  tc: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
});

module.exports = mongoose.model('Profile', profileSchema);
