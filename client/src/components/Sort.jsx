import React from "react"

const Sort = () => {
  return (
    <select className="rounded-md p-4 mb-[200px]">
      <option value="">Sort By Price</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  )
}

export default Sort
