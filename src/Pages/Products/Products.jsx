import React, { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      const filteredProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(filteredProducts);
      localStorage.setItem("products", JSON.stringify(filteredProducts));
    }
  };

  return (
    <div className="productsPage">
      {products.map((product) => (
        <div key={product.id} className="productCard">
          <img src={product.productImg} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>Product Category: {product.productCategory}</p>
          <p>Price: {product.productPrice}</p>
          <p>Description: {product.description}</p>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
