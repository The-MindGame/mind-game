import React from "react";
import { useRef, useState, useContext } from "react";
import GoogleIcon from "../assets/icons/googleicon.svg";
import { authContext } from "./Authentication";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function LoginForm() {
  const { authentication, setAuthentication } = useContext(authContext);
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://backmind-production.up.railway.app/auth/login`,
        { email, password }
      );
      const token = response.data.token;
      setAuthentication({ email, token });
      Cookies.set("user", JSON.stringify({ email, token }), {
        expires: 3,
        path: "",
      });
      setSuccess(true);
    } catch (err) {
      if (err.response?.statusCode === 404) {
        setErrorMessage("Missing E-mail or Password");
      } else {
        setErrorMessage("Login Failed");
      }
    }
  };

  return (
    <div className="auth-form-wrapper">
      <div className="auth-row">
        <p className="auth-heading">Login to your Account</p>
        <p className="auth-subheading">
          See what is going on with your business
        </p>
      </div>

      <div className="auth-row-outlined">
        <Link to="/login">
          <img src={GoogleIcon} />
          <span>Continue with Google</span>
        </Link>
      </div>

      <div className="auth-row-sm">
        <p>or Sign In with e-mail</p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="mail@abc.com"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="*****************"
          id="password"
          name="password"
          required
        />

        <div className="auth-row">
          <p
            ref={errorRef}
            className={errorMessage ? "errorMessage" : "noDisplay"}
          >
            {errorMessage}
          </p>
        </div>

        <button type="submit" className="button-login">
          Log In
        </button>
      </form>

      <Link to="/sign-up" className="auth-row">
        <span>Don’t have an account?</span>
        <span className="link-to-signup">Create Account</span>
      </Link>
    </div>
  );
}

export default LoginForm;
