import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import Cookies from "universal-cookie"
const cookies = new Cookies()

const PrivateRoutes = () => {
  let auth = cookies.get("token") || null
  auth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
