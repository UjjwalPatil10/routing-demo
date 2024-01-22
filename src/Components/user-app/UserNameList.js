import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
const UserNameList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        backgroundColor: "#efefef",
        border: "1px solid #ccc",
      }}
    >
      {Array.isArray(data) &&
        data.map((user) => (
          <Link
            to={`profile/${user.id}`} //we pass value while navigation
            style={{
              backgroundColor: "cyan",
              padding: "3px 10px",
              margin: 5,
              textDecoration: "none",
              color: "#000",
            }}
            key={user.id}
          >
            {user.name}
          </Link>
        ))}
      {/* {Array.isArray(data) &&
        data.map((user) => {
          <Link
            to={`profile/${user.id}`}
            style={{
              backgroundColor: "cyan",
              padding: "3px 10px",
              margin: 5,
              textDecoration: "none",
              color: "#000",
            }}
            key={user.id}
          >
            {user.name}
          </Link>;
        })} */}
      {/* {Array.isArray(data) &&  data.map((user))=> (
          <Link
            to={`profile/${user.id}`}
            style={{
              backgroundColor: "cyan",
              padding: "3px 10px",
              margin: 5,
              textDecoration: "none",
              color: "#000",
            }}
            key={user.id}
          >
            {user.name}
          </Link>
        ) */}
    </div>
  );
};
export default UserNameList;
