import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  // //{id:3}

  useEffect(() => {
    const u = data?.find((u) => u.id == id);
    if (u) setUser(u);
  }, [id]); //whenever there is change in id expression i.e callback inside {} will execute
  const { name, mobile, age, gender, avatar } = user;
  return (
    <>
      <img src={avatar} />
      <h2>Name:{name}</h2>
      <h3>Mobile:{mobile}</h3>
      <h3>Gender:{gender}</h3>
      <h3>Age:{age}</h3>
    </>
  );
};

export default UserProfile;
