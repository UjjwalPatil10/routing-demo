import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLogin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    if (user.email == "ujjwalpatil493@gmail.com" && user.password == "abcd") {
      setLogin(true);
      navigate("/dashboard");
    } else {
      alert("Invalid user or password");
    }
  };
  return (
    <>
      <h2>Login Page</h2>

      <div style={{ backgroundColor: "cyan", padding: 20, margin: "auto" }}>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <br />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <br />

        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default LoginPage;
