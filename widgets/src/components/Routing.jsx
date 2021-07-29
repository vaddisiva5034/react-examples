import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Employee } from "./Employee";
export function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/home/:id" exact>
          <Home></Home>
        </Route>
        <Route path="/employee" exact>
          <Employee />
        </Route>
        <Route path="/employee/:name">
          <Employee />
        </Route>
      </Switch>
    </Router>
  );
}
