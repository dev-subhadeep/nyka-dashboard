import React, { useState } from "react"
import axios from "axios"
import { baseurl } from "../lib/constants.js"

const initialState = {
  name: "",
  description: "",
  gender: "",
  category: "",
  price: "",
}

const AddProduct = () => {
  const [product, setProduct] = useState(initialState)
  const [productImg, setProductImg] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      ...product,
    }

    if (productImg) {
      data.picture = productImg
    }
    axios({
      method: "POST",
      url: `${baseurl}/products`,
      data,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setProduct(initialState)
      })
  }
  return (
    <div className="shadow-lg rounded-md mx-auto w-96 p-10 bg-white">
      <h1 className="text-3xl font-bold text-center my-4">Add Product</h1>
      <form
        className="flex flex-col gap-2"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <p>
            <label htmlFor="name">Name</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="text"
            name="name"
            value={product.name}
            placeholder="e.g. The Man Company Night Purfume"
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <p>
            <label htmlFor="picture">Image</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="file"
            name="picture"
            accept="image/png image/jpeg image/gif image/jpg"
            onChange={(e) => setProductImg(e.target.files[0])}
          />
        </div>
        <div>
          <p>
            <label htmlFor="description">Description</label>
          </p>
          <textarea
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            name="description"
            placeholder="Try this irresistible smell..."
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <p>
            <label htmlFor="gender">Gender</label>
          </p>
          <select
            name="gender"
            value={product.gender}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            className=" border rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <p>
            <label htmlFor="category">Category</label>
          </p>
          <select
            name="category"
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
            className=" border rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Select Category</option>
            <option value="makeup">Makeup</option>
            <option value="skincare">Skincare</option>
            <option value="haircare">Haircare</option>
          </select>
        </div>
        <div>
          <p>
            <label htmlFor="price">Price</label>
          </p>
          <input
            className="border border-slate-300 rounded-md p-2 px-2 w-full"
            type="number"
            name="price"
            value={product.price}
            placeholder="e.g. 500"
            onChange={(e) => {
              if (Number(e.target.value)) {
                setProduct({
                  ...product,
                  [e.target.name]: Number(e.target.value),
                })
              }
            }}
          />
        </div>
        <div>
          <button className="w-full mt-4 p-2 rounded-md text-white bg-blue-600">
            Submit
          </button>
        </div>
        <div>
          <button className="w-full border p-2 rounded-md">Done</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
