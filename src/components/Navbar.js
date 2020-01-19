import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-md">
      <div className="navbar-brand">Github Search</div>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <NavLink to="/" exact className="nav-link">
            Users
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/repos" className="nav-link">
            Repositories
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" className="nav-link">
            Info
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
