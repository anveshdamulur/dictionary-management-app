import React, { useState, Fragment } from "react";
import AddProductForm from "./Components/forms/AddProductForm";
import EditProductForm from "./Components/forms/EditProductForm";
import ProductTable from "./Components/tables/ProductTable";
import DesiredProductTable from "./Components/tables/DesiredProductTable";

const App = () => {
  // Data
  let desiredProductsData = [];
  const colorRange = ["Grey", "Black", "Silver"];
  let productsData = [
    { id: 1, name: "Apple iPhone 6s", color: "Stonegrey", price: "769" },
    {
      id: 2,
      name: "Samsung Galaxy",
      color: "MidnightBlack",
      price: "569"
    },
    { id: 3, name: "Huwei P9 ", color: "Mystlic Silver", price: "272" }
  ];

  const initialFormState = { id: 0, name: "", color: "", price: "" };
  sessionStorage.setItem("productDataSession", JSON.stringify(productsData));

  // Setting state
  const [products, setProducts] = useState(productsData);
  const [desiredProducts, setdesiredProducts] = useState(desiredProductsData);
  const [currentProduct, setCurrentProduct] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [original, setOriginal] = useState(true);

  const getDesiredProducts = () => {
    let tempArray;
    if (sessionStorage.getItem("productDataSession1") === null) {
      tempArray = Array.from(
        JSON.parse(sessionStorage.getItem("productDataSession"))
      );
    } else {
      tempArray = Array.from(
        JSON.parse(sessionStorage.getItem("productDataSession1"))
      );
    }

    let arr = [];
    let obj = {};
    tempArray.forEach(product => {
      colorRange.forEach(color => {
        let lowereCasedProductColor = product.color.toLowerCase();
        let lowereCasedColor = color.toLowerCase();
        if (lowereCasedProductColor.includes(lowereCasedColor)) {
          obj = {
            id: Math.random(),
            name: product.name,
            color: color,
            price: product.price
          };

          arr.push(obj);
        }
      });
    });
    // setdesiredProducts([...arr]);
    setProducts([...arr]);
    setOriginal(false);
  };

  // CRUD operations
  const addProduct = product => {
    product.id = products.length + 1;
    setProducts([...products, product]);
    let tempArray = Array.from(
      JSON.parse(sessionStorage.getItem("productDataSession"))
    );
    let arr = [...tempArray, product];
    sessionStorage.setItem("productDataSession1", JSON.stringify(arr));
  };

  const deleteProduct = id => {
    setEditing(false);

    setProducts(products.filter(product => product.id !== id));
  };

  const updateProduct = (id, updatedProduct) => {
    setEditing(false);

    setProducts(
      products.map(product => (product.id === id ? updatedProduct : product))
    );
  };

  const editRow = product => {
    setEditing(true);

    setCurrentProduct({
      id: product.id,
      name: product.name,
      color: product.color,
      price: product.price
    });
  };

  return (
    <div className="container mt-1">
      <h2 className="text-center text-secondary text-border">
        Dictionary Management App
      </h2>
      <div>
        <div>
          {editing ? (
            <Fragment>
              <h4>Edit Product</h4>
              <EditProductForm
                editing={editing}
                setEditing={setEditing}
                currentProduct={currentProduct}
                updateProduct={updateProduct}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h4>Add Product</h4>
              <AddProductForm addProduct={addProduct} />
            </Fragment>
          )}
        </div>
        <div className=" mt-5">
          <h3 className="text-success">
            {" "}
            {original ? "Original DataSet" : "Desired DataSet"}
          </h3>
          <ProductTable
            products={products}
            editRow={editRow}
            deleteProduct={deleteProduct}
          />
          <button
            className="btn btn-primary"
            onClick={() => getDesiredProducts()}
          >
            get desired Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
