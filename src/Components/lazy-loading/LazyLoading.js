import React, { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Cart from "../cart/Cart";
// import Home from "../home/Home";
// import Orders from "../orders/Orders";
// import Products from "./Products";

const Cart = lazy(() => import("./cart/Cart"));
const Home = lazy(() => import("./home/Home"));
const Orders = lazy(() => import("./orders/Orders"));
const Products = lazy(() => import("./products/Products"));
const LazyLoading = () => {
  return (
    <>
      <h2>Lazy Loading</h2>
      <hr />

      <Link to="">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>

      <hr />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default LazyLoading;
