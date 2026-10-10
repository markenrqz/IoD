// Import Express so we can create routes
const express = require("express");

// Create an Express router
const router = express.Router();

// Import our controllers
const Controllers = require("../controllers");

// POST /api/import/shows
// Fetches TVMaze data and stores it in MongoDB
router.post("/shows", (req, res) => {
  Controllers.importController.importShows(req, res);
});

// Export the router so server.js can use it
module.exports = router;
