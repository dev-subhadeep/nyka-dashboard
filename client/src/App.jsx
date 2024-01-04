import { useState } from "react"

import "./App.css"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import { Route, Routes } from "react-router-dom"
import ComponentChecker from "./pages/ComponentChecker"

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/check" element={<ComponentChecker />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
