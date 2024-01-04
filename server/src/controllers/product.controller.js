const Product = require("../models/product.model")

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body })
    console.log(product)
    res.status(201).send({ message: "Product created successfully" })
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createProduct,
}
