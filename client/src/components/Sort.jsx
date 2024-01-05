import React from "react"
import { useDispatch } from "react-redux"
import { orderToggled } from "../redux/features/filterSlice"

const Sort = () => {
  const dispatch = useDispatch()
  return (
    <select
      className="rounded-md p-4 mb-[200px]"
      onChange={(e) => dispatch(orderToggled(e.target.value))}
    >
      <option value="">Sort By Price</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  )
}

export default Sort
