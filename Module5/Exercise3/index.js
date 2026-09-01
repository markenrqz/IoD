const express = require("express");

const app = express();
const port = 3000;

const calculatorRoutes = require("./routes/calculatorRoutes");

app.use("/", express.static("public"));
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
