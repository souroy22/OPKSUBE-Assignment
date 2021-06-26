import React, { useRef, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./SignIn.css";
import Base from "./Base";
import { useDispatch } from "react-redux";
import { signin, authenticate, isAuthenticated } from "../API/Auth";
import { userSignIn } from "../Redux_State/Actions/index";

const SignIn = () => {
  const emailField = useRef();
  const passwordField = useRef();
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {}, [redirect]);

  const onSubmit = (event) => {
    event.preventDefault();
    const email = emailField.current.value;
    const password = passwordField.current.value;
    signin({ email, password })
      .then((data) => {
        console.log(data);
        authenticate(data, () => {
          const user = data.user;
          dispatch(userSignIn(user));
          setRedirect(true);
        });
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    if (redirect) {
      return <Redirect to="/" />;
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
            Login
          </button>
        </form>
      </div>
      {performRedirect()}
    </Base>
  );
};

export default SignIn;
