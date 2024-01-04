const express = require("express")
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller")
const productRouter = express.Router()

productRouter.post("/", createProduct)
productRouter.get("/", getAllProducts)
productRouter.get("/:id", getSingleProduct)
productRouter.patch("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)

module.exports = productRouter
