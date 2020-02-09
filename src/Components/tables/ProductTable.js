import React from "react";

const ProductTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Color</th>
        <th scope="col">Price</th>
        <th scope="col">Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
      {props.products.length > 0 ? (
        props.products.map(product => (
          <tr key={product.id} scope="row">
            <td>{product.name}</td>
            <td>{product.color}</td>
            <td> CHF {product.price}</td>
            <td>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  props.editRow(product);
                }}
              >
                Edit
              </button>
              <span> </span>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => props.deleteProduct(product.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Products</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ProductTable;
