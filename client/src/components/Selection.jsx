import React from "react"
import { titleCase } from "../lib/convertCase"
import { useDispatch, useSelector } from "react-redux"
import { categoryToggled, genderToggled } from "../redux/features/filterSlice"

const Selection = ({ filterParam, options }) => {
  const { gender, category } = useSelector((store) => store.filters)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (filterParam === "gender") {
      dispatch(genderToggled(e.target.value))
    }
    if (filterParam === "category") {
      dispatch(categoryToggled(e.target.value))
    }
  }

  return (
    <select
      className="rounded-md p-4 mb-[200px]"
      onChange={(e) => handleChange(e)}
    >
      <option className="rounded-md" value="">
        Filter by {titleCase(filterParam)}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {titleCase(option)}
        </option>
      ))}
    </select>
  )
}

export default Selection
