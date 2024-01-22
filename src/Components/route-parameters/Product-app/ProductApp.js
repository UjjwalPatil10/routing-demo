import React from "react";
import Categories from "./Categories";
import ProductList from "./ProductList";
import { Routes, Route } from "react-router";
import ProductDetails from "./ProductDetails";

const ProductApp = () => {
  return (
    <>
      <h3>Product App</h3>
      <section style={{ display: "flex", height: "100vh" }}>
        <div style={{ maxWidth: 300 }}>
          <Categories />
        </div>
        <div style={{ flex: "1 1 auto", height: "100vh" }}>
          {/* user profile  */}
          <Routes>
            {/* http://localhost:3000/profile/2  */}
            <Route path="list/:category" element={<ProductList />} />
            <Route path="details/:category/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default ProductApp;
