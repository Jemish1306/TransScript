// models/Transcription.js
const mongoose = require('mongoose');

const TranscriptionSchema = new mongoose.Schema({
    videoName: String,
    transcription: [
        {
            speaker: String,
            text: String,
        },
    ],
});

module.exports = mongoose.model('Transcription', TranscriptionSchema);
