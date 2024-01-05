const express = require("express")
const app = express()
const cors = require("cors")
const connection = require("./utils/connection")
const { createUser, getUser } = require("./controllers/user.controller")
const productRouter = require("./routes/product.routes")

require("dotenv").config()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send({ message: "OK" })
})

app.post("/api/register", createUser)
app.post("/api/login", getUser)

app.use("/api/products", productRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB connection established")
    console.log("listening on port " + process.env.PORT)
  } catch (error) {
    console.error(error)
  }
})
