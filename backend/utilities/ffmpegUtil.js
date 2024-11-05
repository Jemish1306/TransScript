// utils/ffmpegUtil.js
const ffmpeg = require('fluent-ffmpeg');

const processMedia = (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .output(outputPath)
      .on('end', () => resolve())
      .on('error', (err) => reject(err))
      .run();
  });
};

module.exports = { processMedia };
