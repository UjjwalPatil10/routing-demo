import React from "react";
import { Link } from "react-router-dom";
import data from "./data";

const Categories = () => {
  const catList = Object.keys(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 5,
        backgroundColor: "cyan",
      }}
    >
      <h3>Categories</h3>
      {Array.isArray(catList) &&
        catList.map((cat, i) => (
          <Link
            key={cat + i}
            to={`list/${cat}`}
            style={{
              textDecoration: "none",
              padding: "3px 5px",
              margin: 5,
              backgroundColor: "magenta",
              color: "#000",
            }}
          >
            {cat}
          </Link>
        ))}
    </div>
  );
};

export default Categories;
