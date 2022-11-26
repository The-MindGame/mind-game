import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../src/styles/Home.scss";
import videoBg from "../assets/video/themind.mp4";

function HomePage() {
  return (
    <div className="home" style={{position: "relative"}}>
      <video src={videoBg} autoPlay loop muted />
      <div className="homepageElements">
        <h1 className="homepageTitle">The Mind Game</h1>
        <p className="gameMotto">Unite mind with your friends...</p>
        <div className="homepageButtons">
          {/* exact to="/login" 
          exact to="/signup"*/}
          <NavLink to={'/login'} id="loginButton" className="button">
            Login
          </NavLink>
          <NavLink  to={'/signup'} id="signupButton" className="button">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
