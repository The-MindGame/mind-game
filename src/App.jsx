import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/HomePage";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedLogin from "./routes/ProtectedLogin";
import StartGamePage from "./pages/StartGamePage";
import AboutPage from "./pages/AboutPage";
import Rules from "./pages/Rules";
import Navbar from "./components/Navbar.jsx";

import { useContext, useEffect } from "react";
import { authContext } from "./components/Authentication";
import Cookies from "js-cookie";

import "./App.scss";

function App() {
  const { authentication, setAuthentication } = useContext(authContext);

  useEffect(() => {
    const auth = Cookies.get("user");
    if (auth) {
      setAuthentication(auth);
    }
  }, [authentication]);

  const location = useLocation();
  const current = location.pathname.split("/").filter((x) => x);

  return (
    <div className="App">
      {current[current.length - 1] === "start" ? <></> : <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rules" element={<Rules />} />
        <Route element={<ProtectedLogin />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/start" element={<StartGamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
