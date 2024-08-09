import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [product, setProduct] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    productImg: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    setProduct({
      productName: "",
      productCategory: "",
      productPrice: "",
      productImg: "",
      description: "",
    });
  };

  return (
    <>
      <div className="productsForm">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              placeholder="Enter your product name"
            />
          </div>
          <div>
            <label>Product Category:</label>
            <input
              name="productCategory"
              value={product.productCategory}
              onChange={handleChange}
              placeholder="Enter your product cteagory"
            ></input>
          </div>
          <div>
            <label>Indegrients:</label>
            <input
              type="text"
              name="productPrice"
              value={product.productPrice}
              onChange={handleChange}
              placeholder="Enter your ingradient your meal"
            />
          </div>
          <div>
            <label>Product Img (URL):</label>
            <input
              type="text"
              name="productImg"
              value={product.productImg}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Enter yor method of meal"
            />
          </div>
          <button type="submit" className="dashboardBtn">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
