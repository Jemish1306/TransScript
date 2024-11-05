// backend/routes/mediaRoutes.js
const express = require('express');
const multer = require('multer');
const { handleUpload, getTranscription } = require('../controllers/handleUpload');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Upload and process transcription
router.post('/upload', upload.single('file'), handleUpload);

// Retrieve transcription by ID (assuming you save an ID when you save transcription data)
router.get('/transcription/:id', getTranscription);

module.exports = router;
