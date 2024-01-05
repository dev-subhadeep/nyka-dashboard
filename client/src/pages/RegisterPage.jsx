import React, { useState } from "react"
import axios from "axios"
import { baseurl } from "../lib/constants"
import { NavLink, useNavigate } from "react-router-dom"

const initialState = {
  name: "",
  email: "",
  password: "",
}

const RegisterPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(data)
    axios({
      url: `${baseurl}/register`,
      method: "POST",
      data,
    }).then((response) => {
      setData(initialState)
      console.log(response)
      navigate("/login")
    })
  }
  return (
    <div className="shadow-lg rounded-md mx-auto w-96 p-10">
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <p>
            <label htmlFor="name">Name</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="text"
            name="name"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="e.g. John Doe"
          />
        </div>
        <div>
          <p>
            <label htmlFor="name">Profile Picture</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="file"
            name="avatar"
          />
        </div>
        <div>
          <p>
            <label htmlFor="name">Email</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="email"
            name="email"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
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
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder="*********"
          />
        </div>
        <div>
          <button className="w-full p-2 rounded-md text-white bg-blue-600">
            Register
          </button>
        </div>
        <div>
          <p>
            Already have an account?{" "}
            <NavLink className="underline" to="/login">
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
