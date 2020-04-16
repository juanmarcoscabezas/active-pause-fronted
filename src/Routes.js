import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import ProtectedRoute from './componets/ProtectedRoute';
import UnProtectedRoute from './componets/UnProtectedRoute';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import Playlists from "./componets/Playlists/Playlists";
import Exercises from "./componets/Exercises/Exercises";

function Routes(props) {
  return (
    <Switch>
        <Route path="/" exact component={Home}/>
        <ProtectedRoute path="/playlists" exact component={Playlists} appProps={props}/>
        <ProtectedRoute path="/exercises" exact component={Exercises} appProps={props}/>
        <ProtectedRoute path="/profile" exact component={Profile} appProps={props}/>
        <UnProtectedRoute path="/auth/login" exact component={Login} appProps={props}/>
        <UnProtectedRoute path="/auth/signup" exact component={Signup} appProps={props}/>
        <Route component={NotFound} />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps) (Routes);