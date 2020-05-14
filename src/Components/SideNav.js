import React from 'react';

import './Styles/SideNav.css';


function SideNav() {
  return (
      <div className="sideNavBar">
         <div className='sideNav_logo nav_grid1'>
             <p>CORE TRACK</p>
             <i className="fas fa-user-clock"></i>
         </div>
         <div className='sideNav_icono nav_grid2'>
         <i className="fas fa-home"></i>
         </div>
         <div className='sideNav_icono nav_grid3'>
         <i className="fas fa-users"></i>
         </div>
         <div className='sideNav_icono nav_grid4'>
         <i className="fas fa-chart-pie"></i><p>USUARIO</p>
         </div>
         <div className='sideNav_icono nav_grid5'>
         <i className="fas fa-chart-pie"></i><p>PROYECTO</p>
         </div>
      </div>
   
  );
}

export default SideNav;
