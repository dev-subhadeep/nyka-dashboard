const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      min: 1,
      max: 50,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

module.exports = User
