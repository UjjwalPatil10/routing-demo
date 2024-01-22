import React from "react";
import UserNameList from "./UserNameList";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";
const UserApp = () => {
  return (
    <>
      <h4>User App</h4>
      <section style={{ display: "flex" }}>
        <div style={{ maxWidth: 300 }}>
          {/* user name list  */}
          <UserNameList />
        </div>
        <div style={{ flex: "1 1 auto" }}>
          {/* user profile  */}
          <Routes>
            {/* http://localhost:3000/profile/2  */}
            <Route path="profile/:id" element={<UserProfile />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default UserApp;
