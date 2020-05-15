import React from 'react';

import Timer from '../Components/Timer';
import items from "./items";

import './Styles/TimeCounter.css'

const setTareaTiempo = (tiempo, task) => {
  
  let tiempoPorTareaArray = [tiempo.h, tiempo.m, tiempo.s];
  const tiempoPorTarea = tiempoPorTareaArray.join(':');
  let task1= 'tarea1'
  console.log(tiempoPorTarea);
  localStorage.setItem(task1, tiempoPorTarea);
  return tiempoPorTarea;
}


function TimeCounter(props) {

  console.log(props.location.state)

  return (
      <div className="view_container">
          <div className="timeCounter_header">
              <h1>Nombre del Proyecto</h1>
              <h3>tareas de usuario: nombre</h3>
          </div>
          <div className="timeCounter_body">
              <h3>Tarea</h3>
              <div className="timeCounter_body_description">
               
              </div>
              
              
          </div>
          <div className="timeCounter_timer">
             <Timer eachTarea={(tiempo, task) => setTareaTiempo( tiempo, task)} />
          </div>
         
      </div>
   
  );
}

export default TimeCounter;