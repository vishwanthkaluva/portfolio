import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <div className="links">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/projects" className="link">
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;