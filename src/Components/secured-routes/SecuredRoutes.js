import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import DashboardPage from "./DashboardPage";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import UserListPage from "./UserListPage";

const SecuredRoutes = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const setLogin = (status) => {
    setAuthenticated(status);
  };

  // create a component that will check whether a user is logged in or not
  // if user is logged then allow secure route(allow to access)
  // if user is not logged then redirect to login page
  // below we take ProtectedRoute method for secure route i.e user is Authenticated then allow secure route otherwise send him to LoginPage
  const ProtectedRoute = ({ children }) => {
    //children is content between opening and closing tag
    //we take any name and that name start with uppercase of function
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {!isAuthenticated && <Link to="/login">Login</Link>}
      {isAuthenticated && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/user-list">User List</Link>
        </>
      )}
      <hr />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage setLogin={setLogin} />} />
        {/* secure route  */}
        <Route
          path="user-list"
          element={
            <ProtectedRoute>
              <UserListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage setLogin={setLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default SecuredRoutes;
