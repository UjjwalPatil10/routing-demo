import React from "react";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";

import Products from "./Products";
import { RouteProps, Route, Link, Routes } from "react-router-dom"; // npm i react-router-dom
import MarketingServices from "./MarketingServices";
import DevelopmentServices from "./DevelopmentServices";
import DesigningServices from "./DesigningServices";
import Overview from "./Overview";
import Team from "./Team";
const BasicRouting = () => {
  return (
    <>
      <h2>Basic Routing</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Our Services</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact-us">Contact</Link>
      <hr />

      <Routes>
        {/* http://localhost:3000/  */}
        <Route path="" element={<Home />} />
        {/* http://localhost:3000/about  */}
        {/* below "about/*" means after "about" there is path and allows it  */}
        <Route path="about/*" element={<About />} />
        {/* http://localhost:3000/services  */}
        <Route path="services" element={<Services />}>
          <Route path="" element={<DesigningServices />} />
          <Route path="development" element={<DevelopmentServices />} />
          <Route path="marketing" element={<MarketingServices />} />
        </Route>

        {/* <Route path="services" element={<Services />}>
          <Route path="" element={<DesigningServices />} />
          <Route path="marketing" element={<MarketingServices />} />
          <Route path="development" element={<DevelopmentServices />} />
        </Route> */}
        {/* http://localhost:3000/products  */}

        <Route path="products" element={<Products />} />
        {/* http://localhost:3000/contact-us  */}

        <Route path="contact-us" element={<Contact />} />
      </Routes>
    </>
  );
};

export default BasicRouting;
