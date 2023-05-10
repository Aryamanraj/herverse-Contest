const express = require('express');
const app = express();
const artistProfileRoutes = require('./routes/artistProfile');

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for artist profile
app.use('/artist-profile', artistProfileRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
