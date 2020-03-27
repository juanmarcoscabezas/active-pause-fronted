import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, appProps, ...rest }) => (
  <Route {...rest} render={(props) =>
      appProps.auth.isAuthenticated
      ? <Component/>
      : <Redirect
          to={`/auth/login?redirect=${props.location.pathname}${props.location.search}`}
        />
      }
  />
);

export default ProtectedRoute;