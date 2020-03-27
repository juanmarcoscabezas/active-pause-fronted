import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

export default function Routes({ appProps }) {
  return (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/auth/login" exact component={Login}/>
        <Route path="/auth/signup" exact component={Signup}/>
        <Route component={NotFound} />
    </Switch>
  );
}