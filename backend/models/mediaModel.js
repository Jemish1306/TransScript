// models/mediaModel.js
const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Media', mediaSchema);
