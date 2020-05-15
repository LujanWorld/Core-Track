import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

import SideNav from "./Components/SideNav";
import Dashboard from "./Views/Dashboard";
import UserTask from "./Views/UserTask";
import TimeCounter from "./Components/TimerCounter";
import UserChart from "./Views/UserChart";
import ProjectChart from "./Views/ProjectChart";

import "./App.css";

function App() {
  return (
    <div className="layoutGrid">
      <HashRouter>
        <div className="layoutSidebar">
          <SideNav />
        </div>
        <Switch>
          <div className="layoutview">
            <Route exact path="/" component={SideNav} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/usertask" component={UserTask} />
            <Route exact path="/timecounter" component={TimeCounter} />
            <Route exact path="/userchart" component={UserChart} />
            <Route exact path="/projectchart" component={ProjectChart} />
          </div>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
