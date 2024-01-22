import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <>
      <h2>Services Contact</h2>
      <p>sample {"Services".repeat(20)} component content</p>
      <hr />

      <Link to="">Designing</Link>
      <Link to="marketing">Marketing</Link>
      <Link to="development">Development</Link>
      <hr />
      {/* below  <Outlet /> is component which decide where our component will display  */}
      <Outlet />
    </>
  );
};

export default Services;
