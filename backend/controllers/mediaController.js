const ffmpeg = require('fluent-ffmpeg'); // Use fluent-ffmpeg here
const path = require('path');
const fs = require('fs');
const events = require('events');
events.EventEmitter.defaultMaxListeners = 15; // Adjust as needed

const handleDownload = (req, res) => {
    console.log('Received download request'); // Log when request is received

    if (!req.file) {
        console.error('No file uploaded');
        return res.status(400).json({ error: 'Media file is required' });
    }

    const outputFilePath = path.resolve(__dirname, `../../downloads/output_${Date.now()}.mp4`);
    const tempFilePath = req.file.path;

    console.log('Temp file path:', tempFilePath);
    console.log('Output file path:', outputFilePath);

    ffmpeg(tempFilePath)
        .output(outputFilePath)
        .on('end', () => {
            console.log('FFmpeg processing completed'); // Log successful processing
            res.download(outputFilePath, (err) => {
                if (err) {
                    console.error('Download error:', err);
                    res.status(500).send('Download failed');
                }
                // Clean up files
                fs.unlink(tempFilePath, () => console.log('Temp file deleted'));
                fs.unlink(outputFilePath, () => console.log('Output file deleted'));
            });
        })
        .on('error', (err) => {
            console.error('FFmpeg error:', err); // Log FFmpeg errors
            res.status(500).json({ error: 'Error processing media file' });
        })
        .run();
};

module.exports = { handleDownload };
