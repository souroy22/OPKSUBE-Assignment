import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./API/PrivateRouter";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Profile from './Components/Profile';
import HomePage from './Components/HomePage/HomePage';
import OrderPage from './Components/OrderPage/OrderPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/create/order" exact component={OrderPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
