import React from 'react';
import { Link } from 'react-router-dom'

import './Styles/SideNav.css';


function SideNav() {
  return (
      <div className="sideNavBar">
         <div className='sideNav_logo nav_grid1'>
             <p>CORE TRACK</p>
            
             <i className="fas fa-user-clock"></i>
            
            
         </div>
         <div className='sideNav_icono nav_grid2'>
            <Link to="/dashboard">
             <i className="fas fa-home"></i>
            </Link>
         </div>
         <div className='sideNav_icono nav_grid3'>
         <Link to="/usertask">
         <i className="fas fa-users"></i>
         </Link>
         </div>
         <div className='sideNav_icono nav_grid4'>
         <Link to="/userchart">
         <i className="fas fa-chart-pie"></i><p>USUARIO</p>
         </Link>
         </div>
         <div className='sideNav_icono nav_grid5'>
         <Link to="/projectchart">
         <i className="fas fa-chart-pie"></i><p>PROYECTO</p>
         </Link>
         </div>
      </div>
   
  );
}

export default SideNav;
