import React, { useEffect, useState } from "react"
import axios from "axios"
import ProductTable from "../components/ProductTable"

const baseURL = "http://localhost:8080/api/products/"

const DashboardPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      DashboardPage
      <ProductTable products={products} />
    </div>
  )
}

export default DashboardPage
