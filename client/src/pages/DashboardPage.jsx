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
import ProductForm from "../components/ProductForm"
import { useSelector, useDispatch } from "react-redux"
import { setAddMode, toggleVisibility } from "../redux/features/modalSlice"
import { baseurl } from "../lib/constants"
import checkAuth from "../lib/checkAuth"
import { useNavigate } from "react-router-dom"

const DashboardPage = () => {
  const [products, setProducts] = useState([])
  const params = useSelector((store) => store.filters)
  const { visibility, mode } = useSelector((store) => store.modal)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // useEffect(() => {
  //   const isAuthenticated = checkAuth()

  //   if (!isAuthenticated) {
  //     navigate("/login")
  //   }
  // })

  useEffect(() => {
    console.log("changed")
    axios({
      url: `${baseurl}/products`,
      method: "GET",
      params: {
        category: params.category,
        gender: params.gender,
        sort: "price",
        order: params.order,
      },
    })
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error))
  }, [params])

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
        <Selection filterParam="gender" options={["male", "female"]} />
        <Selection
          filterParam="category"
          options={["makeup", "skincare", "haircare"]}
        />
        <Sort />
        <button
          className="bg-cta text-white uppercase py-4 px-12 h-[58px] rounded-md font-bold self-end"
          onClick={() => {
            dispatch(setAddMode())
            dispatch(toggleVisibility())
          }}
        >
          Add Product
        </button>
      </div>
      <ProductTable products={products} />
      {visibility && (
        <Modal>
          {mode === "add" && <AddProduct />}
          {mode === "edit" && <ProductForm mode="edit" />}
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
