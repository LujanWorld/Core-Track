import React from "react";

<<<<<<< HEAD
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

//import Project from './Components/Project';
import projects from './projects';
import SideNav from './Components/SideNav'
import Dashboard from './Views/Dashboard';
import UserTask from './Views/UserTask';
import TimeCounter from './Components/TimerCounter';
import UserChart from './Views/UserChart';
import ProjectChart from './Views/ProjectChart';
=======
import { HashRouter, Switch, Route } from "react-router-dom";

import SideNav from "./Components/SideNav";
import Dashboard from "./Views/Dashboard";
import UserTask from "./Views/UserTask";
import TimeCounter from "./Components/TimerCounter";
import UserChart from "./Views/UserChart";
import ProjectChart from "./Views/ProjectChart";
>>>>>>> master

import "./App.css";

function App() {
  return (
    <div className="layoutGrid">
      <HashRouter>
<<<<<<< HEAD
        
      <div className='layoutSidebar'>
        <SideNav />
      </div>
      <div>
      <nav className="nav-container">
          <ul>
            {projects.map((project, i) => (
              <li key={i}>
                <Link to={`/projectChart/${project.id}`}>{project.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

        <Switch>
        <div className='layoutview'>
      
        <Route exact  path="/dashboard" component={Dashboard} />
        <Route exact  path="/usertask" component={UserTask} />
        <Route exact  path="/timecounter" component={TimeCounter} />
        <Route exact   path="/userchart" component={UserChart} />
        <Route exact   path="/projectchart/:projectId" component={ProjectChart} />
         </div>
=======
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
>>>>>>> master
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
