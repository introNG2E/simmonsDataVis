import AppliedRoute from "./components/AppliedRoute";
import adminEntry from "./pages/adminEntry";
import adminPanel from "./pages/adminPanel";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import StatisticsPage from "./pages/StatisticsPage";
export default function Routes({ appProps }) {
    // const [isAuthenticated, userHasAuthenticated] = useState(false);//delcared twice
    //routes for the admin page
    return (
      <Switch>
        <AppliedRoute path="/admin" exact component={adminEntry} appProps={appProps} />
        <AppliedRoute path="/adminpanel" exact component={adminPanel} appProps={appProps} />
        <AppliedRoute path="/statistics" exact component={StatisticsPage} appProps={appProps}/>
        { /* Finally, catch all unmatched routes */ }
        <Route component={Homepage} />
      </Switch>
    );
  }