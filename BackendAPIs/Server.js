require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const transcriptionRoutes = require('./src/routes/router');

const app = express();
const PORT = process.env.PORT || 5000;

mongouri

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.log(err));

app.use(express.json());

// Routes
app.use('/api/transcriptions', transcriptionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
