import React, { useState } from "react";

const AddProductForm = props => {
  const initialFormState = { id: 0, name: "", color: "", price: "" };
  const [product, setProduct] = useState(initialFormState);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <form
        className="form-inline ml-3"
        onSubmit={event => {
          event.preventDefault();
          if (!product.name || !product.color || !product.price) {
            setErrorMsg(true);
            return;
          }

          props.addProduct(product);
          setProduct(initialFormState);
        }}
      >
        <div className="row">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="form-control mb-2 mr-sm-2"
            required
          />

          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleInputChange}
            className="form-control mb-2 mr-sm-2"
            placeholder="color"
            required
          />

          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="form-control mb-2 mr-sm-2"
            placeholder="price"
            required
          />
          <button className="btn btn-success btn-sm">Add new Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
