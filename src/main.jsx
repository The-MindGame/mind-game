import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Authentication from "./components/Authentication";
import "./index.scss";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <Router>
        <App />
      </Router>
    </Authentication>
  </React.StrictMode>
);
