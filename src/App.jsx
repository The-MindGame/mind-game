import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Rules from "../src/pages/rules/Rules";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/rules" exact element={<Rules />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
