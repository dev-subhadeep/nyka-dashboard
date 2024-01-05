import React from "react"
import ArrowRightIcon from "../assets/arrow-right.svg"
import { titleCase } from "../lib/convertCase"
import TrashIcon from "../assets/trash.svg"
import EditIcon from "../assets/edit.svg"
import MoreIcon from "../assets/more.svg"
import axios from "axios"
import { baseurl } from "../lib/constants"
import { useDispatch, useSelector } from "react-redux"
import { setEditMode, toggleVisibility } from "../redux/features/modalSlice"

const ProductTable = ({ products }) => {
  const dispatch = useDispatch()
  return (
    <div className="bg-white rounded-xl p-8">
      <div className="flex flex-row justify-between pb-8">
        <h2 className="text-typography1 text-2xl">Latest Orders</h2>
        <button className="flex flex-row items-center gap-2">
          More <img src={ArrowRightIcon} alt="" />{" "}
        </button>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-left p-4 rounded-tl-md bg-background">
              Products
            </th>
            <th className="text-left p-4 bg-background">Gender</th>
            <th className="text-left p-4 bg-background">Category</th>
            <th className="text-left p-4 bg-background">Price</th>
            <th className="text-left p-4 bg-background">Description</th>
            <th className="text-left p-4 rounded-tr-md bg-background">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td className="p-4 border-t">
                  <div className="flex flex-row items-center ">
                    <img
                      src={product.picture}
                      alt={product.name}
                      className="w-8 h-8 rounded-full"
                    />

                    {product.name}
                  </div>
                </td>
                <td className="text-left p-4 border-t">
                  {titleCase(product.gender)}
                </td>
                <td className="text-left p-4 border-t">
                  {titleCase(product.category)}
                </td>
                <td className="text-left p-4 border-t">
                  ${product.price.toFixed(2)}
                </td>
                <td className="text-left p-4 border-t">
                  <div>{product.description}</div>
                </td>
                <td className="text-left p-4 border-t flex flex-row gap-4">
                  <button
                    onClick={() => {
                      dispatch(setEditMode())
                      dispatch(toggleVisibility())
                    }}
                  >
                    <img src={EditIcon} alt="Edit" />
                  </button>
                  <button
                    onClick={() => {
                      axios.delete(`${baseurl}/products/${product._id}`)
                    }}
                  >
                    <img src={TrashIcon} alt="Delete" />
                  </button>
                  <button>
                    <img src={MoreIcon} alt="More" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
