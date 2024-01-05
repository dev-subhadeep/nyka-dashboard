import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import checkAuth from "../lib/checkAuth"
import ProductChart from "../components/ProductChart"

const AnalyticsPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = checkAuth()

    if (!isAuthenticated) {
      navigate("/login")
    }
  }, [navigate])

  return (
    <div>
      <h1>AnalyticsPage</h1>
      <ProductChart />
    </div>
  )
}

export default AnalyticsPage
