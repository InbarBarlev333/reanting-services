import React from "react";
import "./style/Navbar.css";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const Navbar = ({ formHandle, user, userClickedForm }) => {
  return (
    <div className="nav">
      <h1 className="heading">Service Form</h1>
      {user ? <LogOut /> : <SignIn />}
      {user && !userClickedForm ? (
        <div>
          <button onClick={formHandle}>Register</button>
          <button>Edit</button>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
