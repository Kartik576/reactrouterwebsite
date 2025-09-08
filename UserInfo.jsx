import React from "react";
import "./Page.css";

const UserInfo = () => {
  const user = {
    name: "Kartik Modi",
    age: 22,
    dob: "2003-05-12",
    email: "kartik@example.com",
   
  };

  return (
    <div className="page">
      <h1>User Info 👤</h1>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
