const express = require('express');
const router = express.Router();
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const speech = require('@google-cloud/speech');
const fs = require('fs');
const speechClient = new speech.SpeechClient();

const responseManager = require('../../utilities/response.manager');

router.get('/', async (req, res) => {
  return responseManager.onSuccess('Succes Data...!', {}, res);
});

router.post('/', async (req, res) => {
  const inputPath = path.resolve('D:/Jemish/TransScript/backend/public/images/hello.mp4');
  const outputPath = path.resolve('D:/Jemish/TransScript/backend/public/images/hello.wav');

  ffmpeg(inputPath)
    .output(outputPath)
    .on('end', () => {
      res.send('Audio conversion complete! Output file: ' + outputPath);
    })
    .on('error', (err) => {
      console.error('Error processing audio:', err);
      res.status(500).send('Error processing audio.');
    })
    .run();
});

module.exports = router;