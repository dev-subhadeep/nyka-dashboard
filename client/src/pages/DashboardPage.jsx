import React, { useEffect, useState } from "react"
import axios from "axios"
import ProductTable from "../components/ProductTable"
import Modal from "../components/Modal"
import AddProductBtn from "../components/AddProductBtn"
import AddProduct from "../components/AddProduct"
import CaratLeft from "../assets/carat_left.svg"
import CaratRight from "../assets/carat_right.svg"
import Searchbox from "../components/Searchbox"
import NotificationIcon from "../assets/notification-bing.svg"
import ProfilePicture from "../assets/profilepic.jpg"
import Selection from "../components/Selection"
import Sort from "../components/Sort"

const baseURL = "http://localhost:8080/api/products/"

const DashboardPage = () => {
  const [products, setProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="mx-auto mt-[50px]">
      <div className="flex flex-row justify-between">
        <Searchbox />
        <div className="flex flex-row gap-3 border-btnbrdr">
          <button className="rounded-md border-btnbrdr">
            <img
              src={NotificationIcon}
              alt="notifications"
              className="bg-white p-4 border-btnbrdr rounded-md"
            />
          </button>
          <div className="h-full rounded-md border">
            <img
              src={ProfilePicture}
              alt="profile"
              className="w-14 h-14 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row my-4 justify-between">
        <Selection filterParam="gender" options={["Male", "Female"]} />
        <Selection
          filterParam="category"
          options={["Makeup", "Skincare", "Haircare"]}
        />
        <Sort />
        <button
          className="bg-cta text-white uppercase py-4 px-12 h-[58px] rounded-md font-bold self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add Product
        </button>
      </div>
      <ProductTable products={products} />
      {isOpen && (
        <Modal>
          <AddProduct />
        </Modal>
      )}
      <div className="flex flex-row items-center justify-end p-4">
        <button className="w-8 h-8 m-1 rounded border border-btnbrdr bg-slate-300 flex flex-col justify-center items-center">
          <img src={CaratLeft} alt="Previous Page" />
        </button>
        <button className="w-8 h-8 m-1 rounded border font-bold border-input bg-white">
          1
        </button>
        <button className="w-8 h-8 m-1 rounded border font-bold border-btnbrdr bg-white">
          2
        </button>
        <button className="w-8 h-8 m-1 rounded border border-btnbrdr bg-white flex flex-col justify-center items-center">
          <img src={CaratRight} alt="Next Page" />
        </button>
      </div>
    </div>
  )
}

export default DashboardPage
