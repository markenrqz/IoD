const express = require("express");

const router = express.Router();

router.get("/add", (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const result = number1 + number2;

  res.status(200);
  res.json({ result });
});

router.get("/subtract", (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const result = number1 - number2;

  res.status(200);
  res.json({ result });
});

router.get("/multiply", (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const result = number1 * number2;

  res.status(200);
  res.json({ result });
});

router.get("/divide", (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const result = number1 / number2;

  res.status(200);
  res.json({ result });
});

module.exports = router;
