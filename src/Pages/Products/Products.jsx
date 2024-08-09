import React, { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (productName) => {
    const filteredProducts = products.filter(
      (product) => product.productName !== productName
    );
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  return (
    <div className="productsPage">
      {products.map((product) => (
        <div key={product.productName} className="productCard">
          <img src={product.productImg} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>Meal Name: {product.productCategory}</p>
          <p>Igredient: {product.productPrice}</p>
          <p>Description: {product.description}</p>
          <button onClick={() => handleDelete(product.productName)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;