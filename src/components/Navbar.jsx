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
          to="/login"
          className={`navLink ${currentPage === 4 && "currentPage"}`}
        >
          Log In
        </NavLink>
        <NavLink
          to="/signup"
          className={`navLink ${currentPage === 5 && "currentPage"}`}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/"
          className={`navLink ${currentPage === 1 && "currentPage"}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`navLink ${currentPage === 2 && "currentPage"}`}
        >
          About
        </NavLink>
        <NavLink
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
      
      <p className='brand'>The Mind Game</p>
    </header>
  );
};

export default Navbar;
