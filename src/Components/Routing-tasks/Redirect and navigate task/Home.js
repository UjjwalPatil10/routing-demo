import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productlist");
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "space-evenly",
          flexDirection: "column",
          width: "350px",
          // border: "1px solid #ddd",
        }}
      >
        <label>Email</label>
        <input type="email" name="email" />
        <br />

        <label>Password</label>
        <input type="password" name="password" />
        <br />
        <button onClick={handleClick}>Click on me to redirect</button>
      </form>
    </div>
  );
};

export default Home;
