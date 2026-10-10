// Import Mongoose so we can define a schema and model
const mongoose = require("mongoose");

// Define the structure of a TV show document in MongoDB
const showSchema = new mongoose.Schema(
  {
    // Original ID from the TVMaze API
    tvmazeId: {
      type: Number,
      required: true,
      unique: true,
    },

    // Name of the TV show
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Type of show, for example Scripted or Reality
    type: {
      type: String,
    },

    // Main language of the show
    language: {
      type: String,
    },

    // TVMaze returns genres as an array
    genres: {
      type: [String],
    },

    // Current status, for example Running or Ended
    status: {
      type: String,
    },

    // Original premiere date from TVMaze
    premiered: {
      type: String,
    },

    // Average TVMaze rating
    rating: {
      type: Number,
    },

    // URL to the show's image
    image: {
      type: String,
    },

    // Description/summary of the show
    summary: {
      type: String,
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

// Export the Show model so controllers can use it later
module.exports = mongoose.model("Show", showSchema);
