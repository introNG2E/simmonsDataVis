import React from "react";
import { Route } from "react-router-dom";

export default function AppliedRoute({ component: C, appProps, ...rest }) {
  return (
    <Route {...rest} render={props => <C {...props} {...appProps} />} />
  );
}//this component creates a Route where the child component that it renders contains the passed in prop