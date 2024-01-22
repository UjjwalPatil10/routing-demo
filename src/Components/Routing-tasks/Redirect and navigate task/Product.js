import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <div className="app">
      <h3>Hello</h3>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default Product;
