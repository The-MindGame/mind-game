import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";
// import { ReactComponent as Brain } from "../assets/icons/Brain.svg";

const Navbar = ({ currentPage }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };
  return (
    <header>
      <nav ref={navRef}>
        <NavLink
          exact
          to="/"
          className={`navLink ${currentPage === 1 && "currentPage"}`}
        >
          Home
        </NavLink>
        <NavLink
          exact 
          to="/about"
          className={`navLink ${currentPage === 2 && "currentPage"}`}
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/rules"
          className={`navLink ${currentPage === 3 && "currentPage"}`}
        >
          Rules
        </NavLink>
        <button className="navButton navCloseButton" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navButton" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
