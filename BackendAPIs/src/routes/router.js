const express = require('express');
const { getTranscriptions, addTranscription } = require('../Controller/transcriptionController');

const router = express.Router();

router.route('/')
    .get(getTranscriptions)
    .post(addTranscription);

module.exports = router;
