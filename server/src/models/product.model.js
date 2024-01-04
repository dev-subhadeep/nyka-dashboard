const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  picture: {
    type: String,
    default: "https://sudbury.legendboats.com/resource/defaultProductImage",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["makeup", "skincare", "haircare"],
  },
  price: {
    type: Number,
    required: true,
  },
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
