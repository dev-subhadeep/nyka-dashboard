const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
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

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.status(404).send({ error: err })
        } else if (result) {
          const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
          res.status(200).send({ message: "logged in", token })
        } else {
          res.status(500).send({ error: "Wrong credentials" })
        }
      })
    }
  } catch (error) {
    res.status(500).send({ error: `${error.message}` })
  }
}

module.exports = {
  createUser,
  getUser,
}
