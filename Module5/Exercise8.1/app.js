// app.js - new file at top level
const express = require("express");
const app = express();
const port = 3000;

// map all routes to the express app
const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);

// add swagger to the server
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// export the app
module.exports = app;
