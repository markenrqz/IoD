// Import Mongoose so the application can connect to MongoDB
const mongoose = require("mongoose");

// Function used to establish a connection to our MongoDB Atlas database
const dbConnect = async () => {
  try {
    // Connect using the MongoDB connection string stored in the .env file
    // and explicitly use the NextEpisodeDB database
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "NextEpisodeDB",
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    // Display the error if the database connection fails
    console.error("MongoDB connection failed:", error.message);

    // Stop the application because it cannot operate without the database
    process.exit(1);
  }
};

module.exports = dbConnect;
