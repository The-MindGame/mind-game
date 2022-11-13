import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../components/Authentication";

function HomePage() {
  return (
    <div>
      Home
      <Link to="/start">game</Link>
    </div>
  );
}

export default HomePage;
