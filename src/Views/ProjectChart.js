import React from 'react';
import { useParams } from "react-router-dom";

import Chart from "../Components/Chart";

import projects from "./projects";
import tasks from "./items";

const COLORS = [
  "red",
  "green",
  "gold",
  "gray",
  "purple",
  "orange",
  "cyan",
  "magenta",
];

function ProjectChart() {
  const { projectId } = useParams();

  const currentProject = projects.find((project) => project.id == projectId);

  const tasksPerProject = tasks.filter((task) => task.rel_id == projectId);

  return (
    
    <div className="view_container">
    
    <h2>Project name: { currentProject.name }</h2>
      <hr />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Time</th>
            <th>Percentage</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {tasksPerProject.map((task, i) => (
            <tr key={i} style={{background: COLORS[i % COLORS.length]}}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.time}</td>
              <td></td>
              <td><span style={{background: COLORS[i % COLORS.length]}}>&nbsp;</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <Chart data={tasksPerProject} colors={COLORS} />
     
      </div>
      
  );
}

export default ProjectChart;