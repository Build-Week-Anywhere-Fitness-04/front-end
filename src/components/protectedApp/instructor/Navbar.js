import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");
  ////

  useEffect(() => {
    const saveName = JSON.parse(localStorage.getItem("name"));
    if (saveName) {
      setName(saveName);
    }
  }, [name]);
  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <h1>fitness anywhere</h1>
        <nav>
          <NavLink to="">{`Welcome ${name}`}</NavLink>
          <NavLink onClick={logout} to="/login">
            Logout
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
