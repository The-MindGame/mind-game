import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleIcon from "../assets/icons/googleicon.svg";

function SignupForm() {
  const navigate = useNavigate();

  // Setting states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const errorRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [success, setSuccess] = useState(false);
  const [invalidAttempt, setInvalidAttempt] = useState(false);

  // checking whether passwords entered in both fields are corresponding to each other
  useEffect(() => {
    password && confirmPassword
      ? setPasswordMatch(password === confirmPassword)
      : setPasswordMatch(true);
  }, [password, confirmPassword, passwordMatch]);

  // to be implemented later
  useEffect(() => {
    setErrorMessage("");
  }, [name, email, password, passwordMatch]);

  const handleSubmit = async (e) => {
    // to prevent refresh
    e.preventDefault();

    try {

      if(passwordMatch){
        setInvalidAttempt(false);
        const response = await axios.post(
          `https://backmind-production.up.railway.app/auth/registration`,
          JSON.stringify({ email, password, name }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setSuccess(true);
        setPassword("");
        navigate("/login");
      }
      else{
        setInvalidAttempt(true);
      }
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <div className="auth-form-wrapper">
      <div className="auth-row">
        <p className="auth-heading">Create new Account</p>
        <p className="auth-subheading">
          See what is going on with your business
        </p>
      </div>

      <div className="auth-row-outlined">
        <Link to="/signup">
          <img src={GoogleIcon} />
          <span>Continue with Google</span>
        </Link>
      </div>

      <div className="auth-row-sm">
        <p>or Sign Up with e-mail</p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="luntik"
          id="username"
          name="username"
          required
        />

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

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="*****************"
          id="confirm-password"
          name="confirm-password"
          required
        />

        <div className="auth-row">
          <p
            ref={errorRef}
            className={`${passwordMatch ? "noDisplay" : "errorMessage"} ${invalidAttempt ? "highlight" : ""}`}
          >
            Passwords don't match
          </p>
          <p
            ref={errorRef}
            className={`${errorMessage ? "errorMessage" : "noDisplay"} ${invalidAttempt ? "highlight" : ""}`}
          >
            {errorMessage}
          </p>
        </div>

        <button type="submit" className="button-signup">
          Create Account
        </button>
      </form>

      <Link to="/login" className="auth-row">
        <span>Already have an account?</span>
        <span className="link-to-login">Sign In</span>
      </Link>
    </div>
  );
}

export default SignupForm;
