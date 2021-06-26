import React from "react";
import NavBar from "./NavBar/NavBar";

const Base = ({
  children,
}) => (
  <div>
    <NavBar />
    <div className="container-fluid">
      <div >{children}</div>
    </div>
  </div>
);

export default Base;
