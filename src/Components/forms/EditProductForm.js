import React, { useState, useEffect } from "react";

const EditProductForm = props => {
  const [product, setProduct] = useState(props.currentProduct);

  useEffect(() => {
    setProduct(props.currentProduct);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      className="form-inline"
      onSubmit={event => {
        event.preventDefault();

        props.updateProduct(product.id, product);
      }}
    >
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
        className="form-control mb-2 mr-sm-2"
      />

      <input
        type="text"
        name="color"
        value={product.color}
        onChange={handleInputChange}
        className="form-control mb-2 mr-sm-2"
      />

      <input
        type="text"
        name="price"
        value={product.price}
        onChange={handleInputChange}
        className="form-control mb-2 mr-sm-2"
      />
      <button className="btn btn-info mr-1 mt-0">Update Product</button>

      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditProductForm;
