// Import Axios so we can make HTTP requests to the TVMaze API
const axios = require("axios");

// Base URL for the external TVMaze API
const TVMAZE_BASE_URL = "https://api.tvmaze.com";

// Fetch one page of TV shows from TVMaze
const fetchShows = async (page = 0) => {
  try {
    // Send a GET request to the external API
    const response = await axios.get(`${TVMAZE_BASE_URL}/shows?page=${page}`);

    // Return only the data received from TVMaze
    return response.data;
  } catch (error) {
    // Log the error so it is easier to troubleshoot API problems
    console.error("Error fetching shows from TVMaze:", error.message);

    // Pass the error back to the controller
    throw error;
  }
};

module.exports = {
  fetchShows,
};
