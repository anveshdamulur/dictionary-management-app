import React from "react";

const DesiredProductTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Color</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      {props.products.length > 0 ? (
        props.products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.color}</td>
            <td> CHF {product.price}</td>
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

export default DesiredProductTable;
