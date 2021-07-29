import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Employee1 } from "./Employee1";
import { Employee2 } from "./Employee2";

export function Employee() {
  const { path } = useRouteMatch();
  const params = useParams();
  return (
    <div>
      hello {params.name}
      <Switch>
        <Route path={`${path}/1`}>
          <Employee1></Employee1>
        </Route>
        <Route path={`${path}/2`}>
          <Employee2></Employee2>
        </Route>
      </Switch>
    </div>
  );
}
