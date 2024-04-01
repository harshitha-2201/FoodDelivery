import React, { useState } from "react";
import "./LoginPage.css";
import { assets } from "../../assets/assets";

const LoginPage = ({ setLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-page">
      <form className="login-page-container">
        <div className="login-page-title">
          <h2>{currentState}</h2>
          <img src={assets.cross_icon} alt="" onClick={() => setLogin(false)} />
        </div>
        <div className="login-page-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "createAccount" : "LogIn"}{" "}
        </button>
        <div className="login-page-condition">
          <input type="checkbox" required />
          <p> By continuing, i agree to the term of the use &privacy plocies</p>
        </div>
        {currentState === "Login" ? (
          <p>
            {" "}
            Create a new account? <span onClick = {() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already exists ? <span onClick = {() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
