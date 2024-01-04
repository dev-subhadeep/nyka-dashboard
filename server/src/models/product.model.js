const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  productImage: {
    type: String,
    default: "https://sudbury.legendboats.com/resource/defaultProductImage",
  },
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  productGender: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
