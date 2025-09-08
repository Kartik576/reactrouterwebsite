import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">💎 Jewellery Website</div>
      <nav>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/user" className="nav-link">User Info</NavLink>
      </nav>
    </header>
  );
};

export default Header;
