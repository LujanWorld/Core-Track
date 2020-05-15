import React from 'react';

import Timer from '../Components/Timer';

import './Styles/TimeCounter.css'


function TimeCounter() {

  return (
      <div className="view_container">
          <div className="timeCounter_header">
              <h1>Nombre del Proyecto</h1>
              <h3>tareas de usuario: nombre</h3>
          </div>
          <div className="timeCounter_body">
              <h3>Tarea</h3>
              <div className="timeCounter_body_description">
                <h4>-Descripcion de la tarea_</h4>
              </div>
              
              
          </div>
          <div className="timeCounter_timer">
             <Timer  />
          </div>
      </div>
   
  );
}

export default TimeCounter;