const Transcription = require('../Model/TranscriptionSchema');

// Fetch all transcriptions
exports.getTranscriptions = async (req, res) => {
    try {
        const transcriptions = await Transcription.find();
        res.json(transcriptions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new transcription
exports.addTranscription = async (req, res) => {
    const { audioUrl, text } = req.body;
    try {
        const newTranscription = new Transcription({
            audioUrl,
            text
        });
        await newTranscription.save();
        res.status(201).json(newTranscription);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
