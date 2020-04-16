import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

function SideNav() {

    return (
        <div className="SideNav">
            <ul className="sidenav-list">
                <li><Link to="/">Principal page</Link></li>
                <li><Link to="/playlists">Routines</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
            </ul>
        </div>
    );
}

export default SideNav;