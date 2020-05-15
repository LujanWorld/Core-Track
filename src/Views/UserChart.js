import React from 'react';
import { useParams } from "react-router-dom";

import Chart from "../Components/Chart";

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
                        {items.map((item, i) => (
                          <tr key={i} >
                            <td>{item.id}</td>
                            <td>{item.description}</td>
                            <td></td>
                            <td><span >&nbsp;</span></td>
                          </tr>
                        ))}
                      </tbody>
                  </table>
                <hr />
                    <Chart data={items} colors={COLORS} />
        
          </div>
      
  );
}

export default UserChart;