import React, { useState, useEffect } from 'react';
import TimerComponent from './TimerComponent';
import BtnsTimerComponent from './BtnsTimerComponent';
import AlertComponent from './AlertComponent';
import {  toast } from 'react-toastify';

import './Styles/Timer.css';

function Timer(props) {
 const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
 const [interv, setInterv] = useState();
 const [status, setStatus] = useState(0);
 const [isAlertActive, setIsAlertActive] = useState(false);
 const [alertTimeout, setAlertTimeout] = useState();


useEffect(() => {
  if(isAlertActive){
   setAlertTimeout( setInterval(() => {
    toast.success('Tiempo de tarea ¡ ACTIVO !', {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: 1.5,
    className: "toasty",
    })
    ;}, 1200000))
   
  }
  else {
    setAlertTimeout(  clearInterval(alertTimeout))
   
  }
}, [isAlertActive])
 const start = () => {
   run();
   setStatus(1);
   setInterv(setInterval(run, 10));
   console.log('Date Task Start:',Date.now())
   setIsAlertActive(true);
    
   
 };

 let   updatedMs = time.ms,
       updatedS = time.s, 
       updatedM = time.m,
       updatedH = time.h;

  const run = () => {
    if(updatedM === 60 ){
      updatedH ++;
      updatedM = 0;
    }
    if(updatedS === 60 ) {
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 60 ) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    console.log('Date Task pause:',Date.now())
  };

  const { eachTarea } = props;

  const saveTime = t => {
    console.log(t);
    eachTarea(t);
    console.log('Date Task End up:',Date.now())
  }
  
  
  const endUp = () => {
    saveTime(time);
    clearInterval(interv);
    setIsAlertActive(false);
    console.log(isAlertActive);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };
  
  
  const resume = () => start();


  return (
    <div className='timer_container'>
        <div className='stopwatch'>
            <TimerComponent time= {time} />
            <BtnsTimerComponent status={status} resume={resume} endUp={endUp} stop={stop} start={start} />
            <AlertComponent  />
            
           
        </div>
    </div>
  );
}

export default Timer;