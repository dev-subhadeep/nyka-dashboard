import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import checkAuth from "../lib/checkAuth"

const AnalyticsPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = checkAuth()

    if (!isAuthenticated) {
      navigate("/login")
    }
  }, [navigate])

  return <div>AnalyticsPage</div>
}

export default AnalyticsPage
