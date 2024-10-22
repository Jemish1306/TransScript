const mongoose = require('mongoose');

const TranscriptionSchema = new mongoose.Schema({
    audioUrl: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transcription', TranscriptionSchema);
