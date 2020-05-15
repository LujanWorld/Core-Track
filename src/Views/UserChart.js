import React from 'react';
import { useParams } from "react-router-dom";

import Chart from "../Components/Chart";

import projects from "../projects.json";
import tasks from "../tasks.json";

const COLORS = [
  "#FBD104",
  "#2A4956",
  "#92851A",
  "#A3DDFF",
  "#1326AE",
  "orange",
  "cyan",
  "magenta",
];


function UserChart() {
  const { tasksId } = useParams();
//console.log(taskstId)
  //SIMULACION DE REDUX
  const currentTask = tasks.find((project) => tasks.id == tasksId);

  //const tasksPerProject = tasks.filter((task) => task.rel_id == projectId);

  return (
    
    <div className="view_container">
         <h2>User_Name: User_Name</h2>
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
                    {tasks.map((task, i) => (
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
                <Chart data={tasks} colors={COLORS} />
     
      </div>
      
  );
}

export default UserChart;