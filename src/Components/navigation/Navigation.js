import React from "react";
import Header from "./Header";
import { Routes, Route, Navigate, useNavigate } from "react-router";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const Navigation = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <button onClick={() => handleNavigate("home")}>Home</button>
      <button onClick={() => handleNavigate("about")}>About</button>
      <button onClick={() => handleNavigate("contact")}>Contact</button>
      <h2>Navigation</h2>
      <Header />
      <Routes>
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Navigation;
