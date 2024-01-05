import React, { useEffect, useState, useRef } from "react"
import { baseurl } from "../lib/constants"
import axios from "axios"
import Chart from "chart.js/auto"

const ProductChart = () => {
  const chartRef = useRef(null)
  const [productData, setProductData] = useState()
  const [hairdata, setHairData] = useState(0)
  const [skindata, setSkinData] = useState(0)
  const [makeupdata, setMakeupData] = useState(0)

  useEffect(() => {
    axios
      .get(`${baseurl}/products`)
      .then((res) => {
        setProductData(res.data.products)
        setHairData(
          res.data.products.filter((product) => product.category === "haircare")
            .length
        )
        setSkinData(
          res.data.products.filter((product) => product.category === "skincare")
            .length
        )
        setMakeupData(
          res.data.products.filter((product) => product.category === "makeup")
            .length
        )
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  )
}

export default ProductChart
