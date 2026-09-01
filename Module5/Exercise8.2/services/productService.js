const axios = require("axios");

const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

module.exports = {
  getProducts,
};
