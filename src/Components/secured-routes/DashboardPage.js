import React from "react";
import { useNavigate } from "react-router-dom";
const DashboardPage = ({ setLogin }) => {
  const navigate = useNavigate();
  const logout = () => {
    setLogin(false);
    navigate("/login");
  };
  return (
    <>
      <button onClick={logout}>Logout</button>
      <h2>Dashboard Page</h2>
    </>
  );
};

export default DashboardPage;
