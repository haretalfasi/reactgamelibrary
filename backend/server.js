const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Dotenv
require('dotenv').config();
const port = process.env.PORT || 5000;

// Init Server
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection string
const MONGODB_URI = process.env.MONGODB_URI;

// Mongoose Settings
mongoose.set('useFindAndModify', false);

// DB Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully!');
});

// Import Routes
const gamesRouter = require('./routes/games');

// Use Routes
app.use('/games', gamesRouter);

// Server init
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});