import React from "react"
import { titleCase } from "../lib/convertCase"

const Selection = ({ filterParam, options }) => {
  return (
    <select className="rounded-md p-4 mb-[200px]">
      <option className="rounded-md">Filter by {titleCase(filterParam)}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Selection
