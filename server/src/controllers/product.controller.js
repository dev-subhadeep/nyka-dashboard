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

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    if (products.length) {
      res
        .status(200)
        .send({ message: `${products.length} products found`, products })
    } else {
      res.status(404).send({ message: "No product found" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: `${error.message}` })
  }
}

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findOne({ _id: id })
    if (product) {
      res.status(200).send({ message: `Product found`, product })
    } else {
      res.status(200).send({ message: "Product not found" })
    }
  } catch (error) {
    res.status(500).send({ error: `${error.message}` })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    )
    if (product) {
      res.status(200).send({ message: "Product updated", product })
    } else {
      res.status(400).send({ error: "Error in updating product" })
    }
  } catch (error) {
    res.status(500).send({ error: `${error.message}` })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    res.status(200).send({ message: `Product deleted` })
  } catch (error) {
    res.status(500).send({ error: `${error.message}` })
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
