import React from 'react';

import Timer from '../Components/Timer';



import './Styles/TimeCounter.css'

// const onDone = () = {} time data

const setTaskNameTime = (t, task) => {
  
  let timeByTaskNameArray = [t.h, t.m, t.s];
  const timeByTaskName = timeByTaskNameArray.join(':');
  let task1= 'tarea1'
  console.log(timeByTaskName);
  localStorage.setItem(task1, timeByTaskName);
  return timeByTaskName;
}


function TimeCounter(props) {

  console.log(props.location.state)
  const projectName = props.location.state.project;
  const userName = props.location.state.user[0].full_name;
  const taskName = props.location.state.taskName

  return (
      <div className="view_container">
          <div className="timeCounter_header">
              <h1>{projectName}</h1>
              <h3>{userName}</h3>
          </div>
          <div className="timeCounter_body">
              <h3>{taskName}</h3>
              <div className="timeCounter_body_description">
               
              </div>
              
              
          </div>
          <div className="timeCounter_timer">
             <Timer  eachTaskName={(t) => setTaskNameTime( t)} />
           
          </div>
         
      </div>
   
  );
}

export default TimeCounter;