const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  image: { type: String, required: true },
  progress: { type: Number, required: true }
});

module.exports = mongoose.model('Plant', plantSchema);
