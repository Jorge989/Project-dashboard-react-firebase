import "./Sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../assets/dashboard.svg";
import AddIcon from "../assets/addicon.svg";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p> */}
          <p>Hellow User</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
