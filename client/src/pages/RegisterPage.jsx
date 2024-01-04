import React from "react"

const RegisterPage = () => {
  return (
    <div className="shadow-lg rounded-md mx-auto w-96 p-10">
      <h1 className="text-3xl font-bold text-center">Register</h1>
      <form className="flex flex-col gap-2">
        <div>
          <p>
            <label htmlFor="name">Name</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="text"
            name="name"
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
            <button className="underline">Login</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage