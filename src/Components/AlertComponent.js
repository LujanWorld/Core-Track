import React from 'react';
 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AlertComponent(props){
   
    return (
      <div>
      
        <ToastContainer 
        
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss={false}
        draggable
        />
      </div>
    );
}

export default AlertComponent;