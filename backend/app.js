// app.js

const express = require('express');
const mongoose = require('mongoose');
const { URI } = require("../backend/config/dbconfig");
const dataRouter = require('./routes/dataRoutes'); // Import the router directly
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(cors());
// Use the router
app.use(dataRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
