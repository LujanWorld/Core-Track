import React from 'react';



function BtnsTimerComponent (props){
 
  return (
    <div className='btns_container'>
        <div>
        {(props.status === 0) ?
           <button className="start"
            onClick={props.start}
            ><i className="fas fa-play "></i></button> : ''
          
        }
        </div>
        {(props.status === 1) ?
         <div>
             <button  className="pause" onClick={props.stop}><i className="fas fa-pause "></i> </button>
             <button className="stop" onClick ={props.endUp}> <i className="fas fa-stop "></i> </button>
         </div>
        
        : ''

        }
         {(props.status === 2) ?
         <div>
             <button className="start" onClick={props.resume}><i className="fas fa-play "></i> </button>
             <button className="stop" onClick ={props.endUp}><i className="fas fa-stop "></i> </button>
         </div>
        
        : ''

        }
     
    </div>
  );
}

export default BtnsTimerComponent;