// Import Express so we can create routes
const express = require("express");

// Create an Express router
const router = express.Router();

// Import our controllers
const Controllers = require("../controllers");

// READ: Get all shows
// GET /api/shows
router.get("/", (req, res) => {
  Controllers.showController.getAllShows(req, res);
});

// CREATE: Add a new show
// POST /api/shows
router.post("/", (req, res) => {
  Controllers.showController.createShow(req, res);
});

// READ: Get one show by its MongoDB ID
// GET /api/shows/:id
router.get("/:id", (req, res) => {
  Controllers.showController.getShowById(req, res);
});

// UPDATE: Modify an existing show
// PUT /api/shows/:id
router.put("/:id", (req, res) => {
  Controllers.showController.updateShow(req, res);
});

// DELETE: Remove an existing show
// DELETE /api/shows/:id
router.delete("/:id", (req, res) => {
  Controllers.showController.deleteShow(req, res);
});

// Export the router so server.js can use it
module.exports = router;
