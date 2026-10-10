// Import our TVMaze service
const tvmazeService = require("./services/tvmazeService");

// Temporary function used to test the external API connection
const testTvmaze = async () => {
  try {
    // Fetch page 0 of TV shows
    const shows = await tvmazeService.fetchShows(0);

    // Display how many shows were returned
    console.log(`TVMaze returned ${shows.length} shows`);

    // Display the first show so we can inspect its structure
    console.log(shows[0]);
  } catch (error) {
    console.error("TVMaze test failed:", error.message);
  }
};

// Run the test
testTvmaze();
