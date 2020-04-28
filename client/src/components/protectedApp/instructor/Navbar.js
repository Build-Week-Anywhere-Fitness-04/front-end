import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <h1>fitness anywhere</h1>
        <nav>
          <NavLink to="/login">welcome name</NavLink>
          <NavLink onClick={logout} to="/login">
            Logout
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
