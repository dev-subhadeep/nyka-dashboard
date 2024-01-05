import React, { useState } from "react"
import axios from "axios"
import { baseurl } from "../lib/constants"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"

const cookies = new Cookies()
const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { email, password }
    axios({
      method: "POST",
      url: `${baseurl}/login`,
      data,
    })
      .then((res) => {
        cookies.set("token", res.data.token)
        navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="shadow-lg rounded-md mx-auto w-96 p-10">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div>
          <p>
            <label htmlFor="name">Email</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. johndoe@gmail.com"
          />
        </div>
        <div>
          <p>
            <label htmlFor="name">Password</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
          />
        </div>
        <div>
          <button className="w-full p-2 rounded-md text-white bg-blue-600">
            Login
          </button>
        </div>
        <div>
          <p>
            Don't have an account?{" "}
            <button className="underline">Regiser</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
