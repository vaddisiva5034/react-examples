import React from "react";
import { ToDoComponent } from "../src/components/ToDoComponet/ToDoComponent";
import EventHandle from "./components/EventHandle";
import { TestLifeCycle } from "./components/TestLifeCycle";
import { Routing } from "./components/Routing";
import { ParentProviderComp } from "./components/Context/ParentProviderComp";
import { Provider } from "react-redux";
import { store } from "./Store/app.store";
import { Counter } from "./components/Counter";
import { EmployeeTest } from "./components/EmployeeTest";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Routing />
      </div>
    </Provider>
  );
};
