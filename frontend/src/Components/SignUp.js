import React, { useRef, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./SignIn.css";
import Base from "./Base";
import { signup, authenticate, isAuthenticated } from "../API/Auth";

const SignUp = () => {
  const nameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {}, [redirect]);

  const onSubmit = (event) => {
    event.preventDefault();
    const name = nameField.current.value;
    const email = emailField.current.value;
    const password = passwordField.current.value;
    signup({ name, email, password })
      .then((data) => {
        console.log(data);
        setRedirect(true);
      })
      .catch(console.log("Signup request failed"));
  };

  const performRedirect = () => {
    if (redirect) {
      return <Redirect to="/signin" />;
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };
  return (
    <Base>
      <div className="box">
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <input type="text" required ref={nameField} />
            <div className="underline"></div>
            <label>Enter Name</label>
          </div>
          <div className="input-container">
            <input type="email" required ref={emailField} />
            <div className="underline"></div>
            <label>Enter Email</label>
          </div>
          <div className="input-container">
            <input type="password" required ref={passwordField} />
            <div className="underline"></div>
            <label>Enter Password</label>
          </div>
          <button className="submitbutton" onClick={onSubmit}>
            SignUp
          </button>
        </form>
      </div>
      {performRedirect()}
    </Base>
  );
};

export default SignUp;
