import React from 'react';
import { useParams } from "react-router-dom";

import Chart from "../Components/Chart";
import './Styles/UserChart.css';

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
    <div className="timeCounter_header">
    <h2>Nombre del Proyecto: { currentProject.name }</h2>
    </div>
     
    <div className="chart_area">
            <div className="projectChart_body">
                    
      <table  className="chart_table" >
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
      </div>
      <div className="projectChart_chart">   <Chart data={tasksPerProject} colors={COLORS} />
      </div>
      </div>
      </div>
  );
}

export default ProjectChart;