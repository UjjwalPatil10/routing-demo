import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "./data";
const ProductList = () => {
  const { category } = useParams();
  const [productState, setProductState] = useState([]);
  useEffect(() => {
    const products = data[category];
    if (products) {
      setProductState(products);
    }
  }, [category]);
  return (
    <>
      <h3>Product List</h3>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(productState) &&
          productState?.map(
            ({ productId, title, model, brand, price, desc, picture }) => (
              <div
                key={productId}
                style={{
                  width: 200,
                  padding: 5,
                  margin: 5,
                  border: "1px solid #000",
                }}
              >
                <Link to={`/details/${category}/${productId}`}>
                  <img src={picture} style={{ width: "100%", height: 200 }} />
                  <h4>{title}</h4>
                  <h4>Brand:{brand}</h4>
                  <h4>Price:{price}</h4>
                </Link>
              </div>
            )
          )}
      </section>
    </>
  );
};

export default ProductList;
