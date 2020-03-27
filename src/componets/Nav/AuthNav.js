import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./Nav.css";
import { Link } from 'react-router-dom';

function AuthNav(props) {

    function logout() {
        props.dispatch({
            type: 'LOGOUT'
        });
        props.history.push('/');
    }

    return (
    <div className="Nav">
        <ul className="navbar-list">
            <li className="navbar-item-left">
                <Link to="/" className="navbar-link">ActivePause</Link>
            </li>
            <li className="navbar-item-right">
                <div onClick={logout} className="navbar-link">Logout</div>
            </li>
            <li className="navbar-item-right">
                <Link to="/profile" className="navbar-link">Profile</Link>
            </li>
        </ul>
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
      auth: state.AuthReducer
    }
  }
  
  export default connect(mapStateToProps) (withRouter(AuthNav));
