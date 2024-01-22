import React from "react";

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>

      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>pr</th> 
            <th>products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mobile</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Watch</td>
          </tr>
        </tbody>
      </table>

      <button>Add Products</button>
    </div>
  );
};

export default ProductList;
