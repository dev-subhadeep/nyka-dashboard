const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const { saltRounds } = require("../lib/constants")

const createUser = async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
      res.status(200).send({ error: "User already exists" })
      return
    }
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const user = await User.create({ ...req.body, password: hash })
      console.log(user)
      res.status(201).send({ user })
    })
  } catch (error) {
    console.error(error)
    res.status(404).send({ error: error })
  }
}

module.exports = {
  createUser,
}
