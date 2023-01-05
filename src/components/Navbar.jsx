import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.scss";
import Cookies from 'js-cookie'
import Bunny from "../assets/images/bunny.png"


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
  
  const auth_string = Cookies.get("user");

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


      {auth_string ? (JSON.parse(auth_string).token ? (<Profile/>) : (<p className="brand">The Mind Game</p>)) : (<p className="brand">The Mind Game</p>)}

    </header>
  );
};



function Profile() {
  const rating = 1 // REMOVE IF WE DON'T HAVE THIS FUNCTIONALITY
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const picRef = useRef();
  const menuRef = useRef();

  window.addEventListener("click", (e) => {
    if(e.target !== menuRef.current && e.target !== picRef.current){setOpenProfileMenu(false)}
  })

  const handleProfileClick = () => {
    setOpenProfileMenu(!openProfileMenu);
  }

  return( 
    <div className="profile-navbar">

      <button className="profile-pic" onClick={handleProfileClick}><img ref={picRef} src={Bunny}/></button>

      <div className ={`profile-menu ${openProfileMenu ? "active-menu" : "inactive-menu"}`} ref={menuRef}>
        <Link to="/profile"><p>Profile</p></Link>
        <p>Change Password</p>
        <p>Rating : {rating} </p>
      </div>

    </div>
  )
}

export default Navbar;
