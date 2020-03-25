import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./componets/Nav/Nav";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

export default function Routes({ appProps }) {
  return (
    <BrowserRouter>
        <Nav/>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/auth/login" exact component={Login}/>
            <Route path="/auth/signup" exact component={Signup}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}