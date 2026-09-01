const productService = require("../services/productService");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();

    res.status(200);
    res.json(products);
  } catch (error) {
    res.status(500).json({
      error: "Unable to retrieve products",
    });
  }
};

module.exports = {
  getProducts,
};
