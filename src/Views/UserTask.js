import React from "react";
import { Link } from "react-router-dom";
import items from "./items";

import projects from "./projects";

import "./Styles/UserTask.css";

export default function UserTask(props) {
  const statusMap = {
    "1": "Completo",
    "2": "Revisión",
    "3": "Detenido",
    "4": "Prueba",
  };

  return (
    <div className="view_container">
      <div className="timeCounter_header">
        <h1>Todos los Proyectos</h1>
      </div>
      <div className="timeCounter_body">
        {projects.map((proj) => (
          <div className="userTask_tables" key={proj.id}>
            <Link to={`/projectchart/${proj.id}`}>
              <h2>{proj.name}</h2>
              </Link>
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <div>{item.name}</div>
                      <div>{item.description}</div>
                    </td>

                    <td>
                      {item.assignees[0]
                        ? item.assignees[0].full_name
                        : "nobody"}
                    </td>
                    <td >{statusMap[item.status]}</td>
                    <Link to = 
                      {{
                        pathname:`/timecounter/${i}`,
                        state: {
                            taskName: item.name,
                            project: proj.name,
                            user:item.assignees,
                        }
                    }}>
                     <td className="userTask_play">Iniciar Tarea<i className="fas fa-play start"></i></td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
