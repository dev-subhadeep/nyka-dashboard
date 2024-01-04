import React from "react"
import SearchIcon from "../assets/search-normal.svg"
const Searchbox = () => {
  return (
    <div className="flex flex-row p-4 rounded-md border bg-white w-[655px]">
      <i>
        <img src={SearchIcon} alt="search" />
      </i>
      <input type="text" placeholder="Search" className="ml-4" />
    </div>
  )
}

export default Searchbox
