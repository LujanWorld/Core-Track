import React from "react";
import { Link } from "react-router-dom";

import projects from "./projects";
import tasks from "./items";

function Dashboard() {
  const projectList = projects.map((project) => {
    const tasksProject = tasks.filter((task) => task.rel_id === project.id);
    return (
      <div key={project.id}>
        <Link to={`/projectchart/${project.id}`}><h3>{project.name}</h3></Link>
        {tasksProject.map((task) => {
          return <div>{task.name}</div>;
        })}
        <hr/>
      </div>
    );
  });

  return (
    <div className="view_container">
      <h2>All Projects</h2>
      <hr />
      {projectList}
    </div>
  );
}

export default Dashboard;