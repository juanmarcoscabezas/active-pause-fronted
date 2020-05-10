import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

function SideNav() {

    return (
        <div className="SideNav">
            <ul className="sidenav-list">
                <li>
                    <Link to="/">
                        <i class="fas fa-fire"></i>
                        Principal page
                    </Link>
                </li>
                <li>
                    <Link to="/playlists">
                        <i class="fas fa-list-ul"></i>
                        Routines
                    </Link>
                </li>
                <li>
                    <Link to="/exercises">
                        <i className="fas fa-dumbbell"></i>
                        Exercises
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideNav;