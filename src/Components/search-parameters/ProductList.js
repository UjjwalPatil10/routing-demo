import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "./Product";
import data from "./Products.json";
const ProductList = () => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const category = SearchParams.get("category");
    const brand = SearchParams.get("brand");
    // const arr = SearchParams.get(arr);
    // console.log("brand: ", brand);
    // console.log("category: ", category);
    // console.log("arr: ", arr);
    let fdata = []; //here we use 'let' because here we assigned data to it. if we use 'const 'here so we cannot assigned data to it because 'const' is keyword we cannot assigned,modified to it so we get Uncaught TypeError: Assignment to constant variable.

    if (brand && category) {
      fdata = data.filter(
        (prod) =>
          (prod.category == category || category == "all") &&
          (prod.brand == brand || brand == "all")
      );
    } else if (category) {
      fdata = data.filter((prod) => prod.category == category);
    } else if (brand) {
      fdata = data.filter((prod) => prod.brand == brand);
    } else {
      fdata = data;
    }

    // console.log("fdata: ", fdata);
    if (Array.isArray(fdata)) setProducts(fdata);
  }, [SearchParams]);
  return (
    <>
      <h3>Product List</h3>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(products) &&
          products?.map((prod) => <Product key={prod.id} {...prod} />)}
      </section>
    </>
  );
};

export default ProductList;
