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
import Sidebar from "./components/Sidebar"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import PrivateRoutes from "./components/PrivateRoutes"

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-row min-h-screen items-start bg-background">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/check" element={<ComponentChecker />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App
