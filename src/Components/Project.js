import React from "react";
import { useParams } from "react-router-dom";

import Chart from "./Chart";

import projects from "../projects.json";
import tasks from "../tasks.json";

const COLORS = [
  "red",
  "green",
  "blue",
  "black",
  "gray",
  "purple",
  "orange",
  "cyan",
  "magenta",
];

const Project = () => {
  const { projectId } = useParams();

  //SIMULACION DE REDUX
  const currentProject = projects.find((project) => project.id == projectId);
  const tasksPerProject = tasks.filter((task) => task.rel_id == projectId);

  return (
    <>
      <h2>Project name: {currentProject.title}</h2>
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
              <td>{task.description}</td>
              <td>{task.time}</td>
              <td></td>
              <td><span style={{background: COLORS[i % COLORS.length]}}>&nbsp;</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <Chart data={tasksPerProject} colors={COLORS} />
    </>
  );
};

export default Project;
