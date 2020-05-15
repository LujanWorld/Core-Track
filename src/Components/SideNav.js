import React from "react";
import { Link } from "react-router-dom";

import "./Styles/SideNav.css";

function SideNav() {
  return (
    <div className="sideNavBar">
      <div className="sideNav_logo nav_grid1">
        <p>CORE TRACK</p>
        <Link to="/">
          <i className="fas fa-user-clock"></i>
        </Link>
      </div>
      <div className="sideNav_icono nav_grid2">
        <Link to="/usertask">
          <i className="fas fa-home"></i>
        </Link>
      </div>
      <div className="sideNav_icono nav_grid3">
        <Link to="/usertask">
          <i className="fas fa-users"></i>
        </Link>
      </div>
      <div
        className="sideNav_icono nav_grid4"
        style={{ textDecoration: "none" }}
      >
        <Link to="/userchart">
          <i className="fas fa-chart-pie"></i>
        </Link>
        <p>USUARIO</p>
      </div>
      <div className="sideNav_icono nav_grid5">
        <Link to={`/projectchart/5`}>
          <i className="fas fa-chart-pie"></i>
        </Link>
        <p>PROYECTO</p>
      </div>
    </div>
  );
}

export default SideNav;
