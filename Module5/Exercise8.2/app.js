const express = require("express");
const app = express();

// serve static files
app.use("/", express.static("public"));

// map all routes to the express app
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

// add swagger as a dependency
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// export the app
module.exports = app;
