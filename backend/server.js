const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const menuRoutes = require('./Routes/menu');

// Load environment variables from .env file
require('dotenv').config();

const app = express();
// app.use(cors()); 
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// MongoDB connection using the URI from the .env file
mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
app.get('/', (req, res) => { res.send("data") })
app.use('/api', menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
