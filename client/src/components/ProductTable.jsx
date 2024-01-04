import React from "react"

const ProductTable = ({ products }) => {
  return (
    <div>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Products</th>
            <th>Gender</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td className="flex flex-row items-center">
                  <img
                    src={product.picture}
                    alt={product.name}
                    className="w-8 h-8"
                  />

                  {product.name}
                </td>
                <td>{product.gender}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <div>{product.description}</div>
                </td>
                <td>{product.actions}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
