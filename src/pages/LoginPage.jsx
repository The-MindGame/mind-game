import React from "react";
import LoginForm from "../components/LoginForm";
import back from "../assets/images/background.png";

function LoginPage() {
  return (
    <div className="page-wrapper">
      <div className="login-wrapper">
        <img className="background-image" src={back} alt="" />
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
