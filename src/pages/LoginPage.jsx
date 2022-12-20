import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="page-wrapper">
      <div className="login-wrapper">
        <img className="background-image" src="/src/assets/images/background.png" alt="" />
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
