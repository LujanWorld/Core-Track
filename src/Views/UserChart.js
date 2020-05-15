import React from 'react';
import { useParams } from "react-router-dom";

import Chart from "../Components/Chart";
import './Styles/UserChart.css';

import projects from "../projects.json";
import items from "../Views/items.js";

const COLORS = [
  "#FBD104",
  "#2A4956",
  "#92851A",
  "#A3DDFF",
  "#1326AE",
];


function UserChart() {
  const { itemsId } = useParams();

  const currentTask = items.find((item) => items.id == itemsId);

  return (
    
    <div className="view_container">

<div className="timeCounter_header">
              <h1>PROJECT_NAME</h1>
              <h2>User_Name: User_Name</h2>
              <h3>USER_NAME's TASK</h3>
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
           
              
                    
            </div>
            <div className="projectChart_chart">    <Chart data={tasks} colors={COLORS} /></div>
         </div>

        
     
       </div>
      
  );
}

export default UserChart;