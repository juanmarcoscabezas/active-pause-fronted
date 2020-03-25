import React from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
        <ul className="navbar-list">
            <li className="navbar-item-left">
                <Link to="/" className="navbar-link">ActivePause</Link>
            </li>
            <li className="navbar-item-right">
                <Link to="/auth/login" className="navbar-link">Login</Link>
            </li>
            <li className="navbar-item-right">
                <Link to="/auth/signup" className="navbar-link">Signup</Link>
            </li>
        </ul>
    </div>
  );
}

export default Nav;
