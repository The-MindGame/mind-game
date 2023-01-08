import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import SocketProvider from "./components/SocketProvider.jsx";
import Authentication from "./components/Authentication";
import "./index.scss";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <SocketProvider>
      <Router>
        <App />
      </Router>
      </SocketProvider>
    </Authentication>
  </React.StrictMode>
);
