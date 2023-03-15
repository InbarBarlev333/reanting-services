import React from "react";
import "./style/LogOut.css";
import { auth } from "./firebase";

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <div onClick={() => auth.signOut()} className="button">
      LogOut
    </div>
  );
};

export default LogOut;
