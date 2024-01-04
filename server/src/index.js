const express = require("express")
const connection = require("../utils/connection")
const app = express()
require("dotenv").config()

app.use(express.json())
app.get("/", (req, res) => {
  res.send({ message: "App is running" })
})

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB connection established")
    console.log("listening on port " + process.env.PORT)
  } catch (error) {
    console.log(error)
  }
})
