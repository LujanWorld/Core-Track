import React, { useState } from "react";

import { HashRouter, Switch, Route, Link } from "react-router-dom";

import projects from "./projects";
import SideNav from "./Components/SideNav";
import Dashboard from "./Views/Dashboard";
import UserTask from "./Views/UserTask";
import TimeCounter from "./Views/TimeCounter";

import UserChart from "./Views/UserChart";
import ProjectChart from "./Views/ProjectChart";
import items from "./Views/items";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  let showName = name === "";

  return (
    <div className="layoutGrid">
      <HashRouter>
        <div className="layoutSidebar">
          <SideNav />
        </div>

        <Switch>
          <div className="layoutview">
            <Route
              exact
              path={["/nameform", "/"]}
              render={(props) =>
                showName ? (
                  <Dashboard onName={setName} />
                ) : (
                  <UserTask items={items} />
                )
              }
            />
            <Route exact path="/usertask" component={UserTask} />
            <Route exact path="/timecounter/:i" component={TimeCounter} />
            <Route exact path="/userchart" component={UserChart} />
            <Route
              exact
              path="/projectchart/:projectId"
              component={ProjectChart}
            />
          </div>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
