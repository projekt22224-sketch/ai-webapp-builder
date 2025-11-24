const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an instance of the express app
const app = express();

// Middleware configuration
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error: ', err));

// API Routes
app.get('/api/example', (req, res) => {
    res.send('Hello from the API!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
