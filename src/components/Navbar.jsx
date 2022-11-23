import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const navbarElements = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Log in",
    link: "/login",
  },
  {
    name: "Sign up",
    link: "/sign-up",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Rules",
    link: "/rules",
  },
];

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [active, setActive] = useState(null);
  const headerMenus = useRef([]);

  const changeWidth = function (index) {
    const focusedElement = headerMenus.current;

    let distance = 50;
    for (let i = 0; i < index; i++) {
      distance += focusedElement[i].offsetWidth + 24;
    }
    setWidth(focusedElement[index].offsetWidth);
    setLeft(distance);
    setActive(index);
  };

  const navbar = navbarElements.map(({ link, name }, index) => {
    return (
      <NavLink
        ref={(el) => (headerMenus.current[index] = el)}
        onClick={() => changeWidth(index)}
        to={link}
        key={index}
        className={index === active ? "clicked" : ""}
      >
        {name}
      </NavLink>
    );
  });

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };
  return (
    <header>
      <nav ref={navRef}>
        <div className="navbar-wrapper">
          <div style={{ width, left }} className="absolute"></div>
          {navbar}
        </div>
        <button className="navButton navCloseButton" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navButton" onClick={showNavbar}>
        <FaBars />
      </button>

      <p className="brand">The Mind Game</p>
    </header>
  );
};

export default Navbar;
