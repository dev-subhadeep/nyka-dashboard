import React from "react"
import { NavLink } from "react-router-dom"
import DashboardIcon from "../assets/dashboard.svg"
import AnalyticsIcon from "../assets/analytics.svg"
import LogoutIcon from "../assets/logout.svg"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"

const cookies = new Cookies()

const Sidebar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    cookies.remove("token")
    navigate("/login")
  }
  return (
    <div className="w-[230px] mr-12 bg-white min-h-screen">
      <h1 className="text-2xl text-center text-[#013CC6] my-[63px]">
        Nyka Dashboard
      </h1>
      <div className="px-[23px] ml-4 flex flex-col gap-[41px]">
        <div>
          <NavLink to={"/dashboard"} className="flex flex-row gap-4">
            <span>
              <img src={DashboardIcon} alt="" />
            </span>
            <span className="text-[#0B63F8]">Dashboard</span>
          </NavLink>
        </div>
        <div>
          <NavLink to={"/analytics"} className="flex flex-row gap-4">
            <span>
              <img src={AnalyticsIcon} alt="" />
            </span>
            <span>Analytics</span>
          </NavLink>
        </div>
        <div>
          <button onClick={handleLogout} className="flex flex-row gap-4">
            <span>
              <img src={LogoutIcon} alt="" />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
