const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mediaRoutes = require('./routes/mediaRoutes');
const { handleDownload } = require('./controllers/mediaController');

// Define upload and download directories based on your structure
const uploadDir = path.resolve(__dirname, './uploads');
const downloadDir = path.resolve(__dirname, './downloads');

// Check and create directories if they don't exist
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir);

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Set up multer with the uploads directory
const upload = multer({ dest: uploadDir });

// Use mediaRoutes for other media-related routes
app.use('/api', mediaRoutes);

// Route to handle file downloads with multer handling file upload
app.post('/api/download', upload.single('file'), handleDownload);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
