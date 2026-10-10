// Import our MongoDB models
const Models = require("../models");

// Import the service used to communicate with TVMaze
const tvmazeService = require("../services/tvmazeService");

// Fetch TV shows from TVMaze and save them into MongoDB
const importShows = async (req, res) => {
  try {
    console.log("1. Import request received");

    // Fetch page 0 of TV shows from the external TVMaze API
    const tvmazeShows = await tvmazeService.fetchShows(0);

    console.log(`2. TVMaze returned ${tvmazeShows.length} shows`);

    // Transform the TVMaze response into the structure used by our database
    const shows = tvmazeShows.map((show) => ({
      // Keep the original TVMaze ID
      tvmazeId: show.id,

      // Basic show information
      name: show.name,
      type: show.type,
      language: show.language,

      // TVMaze already returns genres as an array
      genres: show.genres,

      status: show.status,
      premiered: show.premiered,

      // Extract the average rating from the nested rating object
      rating: show.rating?.average ?? null,

      // Store only the medium-sized image URL
      image: show.image?.medium ?? null,

      // Store the show's description
      summary: show.summary,
    }));

    console.log("3. Shows transformed");

    // Insert the transformed TV shows into MongoDB
    const insertedShows = await Models.Show.insertMany(shows);

    console.log(`4. MongoDB inserted ${insertedShows.length} shows`);

    // Return a successful response
    res.status(201).json({
      message: "TVMaze shows imported successfully",
      count: insertedShows.length,
    });
  } catch (error) {
    console.error("Error importing TVMaze shows:", error.message);

    // Return an error response if the import fails
    res.status(500).json({
      message: "Failed to import TVMaze shows",
      error: error.message,
    });
  }
};

// Export the controller function so the route can use it
module.exports = {
  importShows,
};
