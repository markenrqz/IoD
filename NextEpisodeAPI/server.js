// Import Express so we can create our REST API
const express = require("express");

// Load environment variables from the .env file
require("dotenv").config();

// Import the MongoDB connection function
const dbConnect = require("./dbConnect");

// Create the Express application
const app = express();

// Connect to MongoDB Atlas
dbConnect();

// Allow the server to read JSON data sent in request bodies
app.use(express.json());

// Import the routes used to populate the database from TVMaze
const importRoutes = require("./routes/importRoutes");

// Register the import routes
app.use("/api/import", importRoutes);

// Import the routes used to manage TV shows
const showRoutes = require("./routes/showRoutes");

// Register the TV show routes
app.use("/api/shows", showRoutes);

// Simple test route to check that the API is running
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the NextEpisode API",
  });
});

// Use the PORT from .env, or 8080 if no PORT has been configured
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`NextEpisode API is running on port ${PORT}`);
});
