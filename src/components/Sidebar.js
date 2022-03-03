import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
//components
import Avatar from "../components/Avatar";
//styles & images
import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard.svg";
import AddIcon from "../assets/addicon.svg";

export default function Sidebar() {
  const { user } = useAuthContext();
  console.log("usuario parceirto", user);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
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
