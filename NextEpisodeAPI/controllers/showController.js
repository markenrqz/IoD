// Import our MongoDB models
const Models = require("../models");

// READ: Get all TV shows from MongoDB
const getAllShows = async (req, res) => {
  try {
    // Find all documents in the shows collection
    const shows = await Models.Show.find();

    // Return the shows and the total number found
    res.status(200).json({
      count: shows.length,
      data: shows,
    });
  } catch (error) {
    console.error("Error getting shows:", error.message);

    res.status(500).json({
      message: "Failed to get shows",
      error: error.message,
    });
  }
};

// READ: Get one TV show using its MongoDB ID
const getShowById = async (req, res) => {
  try {
    // Get the ID supplied in the URL
    const showId = req.params.id;

    // Search MongoDB for a show with this ID
    const show = await Models.Show.findById(showId);

    // Return 404 if no matching show exists
    if (!show) {
      return res.status(404).json({
        message: "Show not found",
      });
    }

    // Return the matching show
    res.status(200).json(show);
  } catch (error) {
    console.error("Error getting show:", error.message);

    res.status(500).json({
      message: "Failed to get show",
      error: error.message,
    });
  }
};

// CREATE: Add a new TV show to MongoDB
const createShow = async (req, res) => {
  try {
    // Create a new Show document using the JSON data sent by the user
    const newShow = new Models.Show(req.body);

    // Save the new show into MongoDB
    const savedShow = await newShow.save();

    // Return the newly created show
    res.status(201).json({
      message: "Show created successfully",
      data: savedShow,
    });
  } catch (error) {
    console.error("Error creating show:", error.message);

    res.status(400).json({
      message: "Failed to create show",
      error: error.message,
    });
  }
};

// UPDATE: Modify an existing TV show using its MongoDB ID
const updateShow = async (req, res) => {
  try {
    // Find the show by ID and update it using the JSON request body
    const updatedShow = await Models.Show.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        // Return the updated document instead of the old one
        new: true,

        // Apply the schema validation rules during the update
        runValidators: true,
      }
    );

    // Return 404 if no show matches the supplied ID
    if (!updatedShow) {
      return res.status(404).json({
        message: "Show not found",
      });
    }

    // Return the updated show
    res.status(200).json({
      message: "Show updated successfully",
      data: updatedShow,
    });
  } catch (error) {
    console.error("Error updating show:", error.message);

    res.status(400).json({
      message: "Failed to update show",
      error: error.message,
    });
  }
};

// DELETE: Remove an existing TV show using its MongoDB ID
const deleteShow = async (req, res) => {
  try {
    // Find the show by ID and delete it from MongoDB
    const deletedShow = await Models.Show.findByIdAndDelete(req.params.id);

    // Return 404 if no matching show exists
    if (!deletedShow) {
      return res.status(404).json({
        message: "Show not found",
      });
    }

    // Return the deleted show as confirmation
    res.status(200).json({
      message: "Show deleted successfully",
      data: deletedShow,
    });
  } catch (error) {
    console.error("Error deleting show:", error.message);

    res.status(400).json({
      message: "Failed to delete show",
      error: error.message,
    });
  }
};

// Export the controller functions so our routes can use them
module.exports = {
  getAllShows,
  getShowById,
  createShow,
  updateShow,
  deleteShow,
};
