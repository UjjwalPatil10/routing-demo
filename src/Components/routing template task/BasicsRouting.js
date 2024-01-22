import React from "react";
import Blogs from "./Blogs";
import Home1 from "./Home1";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";
import Article from "./Article";
const BasicsRouting = () => {
  return (
    <>
      {/* <h2>Basics Routing</h2> */}
      {/* below is path (URL) of App  */}
      <div className="row container-fluid">
        <div className=" mt-3 col-md-4 d-flex justify-content-center">
          <figure>
            <img
              style={{ width: 70, height: 70 }}
              src="https://img.freepik.com/premium-vector/abstract-business-logo_205544-9473.jpg?size=338&ext=jpg"
              alt=""
              // className="img-fluid"
            />
          </figure>
        </div>
        <div
          style={{ fontSize: 15, fontWeight: 600 }}
          className="mt-3 col-md-8 d-flex justify-content-evenly"
        >
          <Link style={{ textDecoration: "none", fontSize: 30 }} to="">
            Home
          </Link>
          <Link style={{ textDecoration: "none", fontSize: 30 }} to="/contact">
            Contact
          </Link>
          <Link style={{ textDecoration: "none", fontSize: 30 }} to="/article">
            Article
          </Link>
          <Link style={{ textDecoration: "none", fontSize: 30 }} to="/blogs">
            Blogs
          </Link>
        </div>
      </div>
      <hr />
      <Routes>
        {/* http://localhost:3000 */}

        <Route path="" element={<Home1 />} />
        {/* http://localhost:3000/my-work */}

        <Route path="contact" element={<Contact />} />
        {/* http://localhost:3000/education */}
        <Route path="article" element={<Article />} />
        {/* http://localhost:3000/blogs */}

        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default BasicsRouting;
