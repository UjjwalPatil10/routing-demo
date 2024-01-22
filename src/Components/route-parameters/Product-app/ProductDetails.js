import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
const ProductDetails = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const prod = data[category].find((p) => p.productId == id);
    if (prod) {
      setProduct(prod);
    }
  }, [category, id]);
  return (
    <>
      <h2>Product Details</h2>
      <div className=" d-flex flex-column align-items-center justify-content-center">
        <img
          src={product.picture}
          style={{ width: 450, height: 350, border: "none" }}
        />
        <h3>
          {id} {product.title}
        </h3>
      </div>
    </>
  );
};

export default ProductDetails;
