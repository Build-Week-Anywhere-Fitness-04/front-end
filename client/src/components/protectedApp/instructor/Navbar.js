import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <h1>fitness anywhere</h1>
        <nav>
          <NavLink to="/login">welcome name</NavLink>
          <NavLink to="/">LogOut</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
