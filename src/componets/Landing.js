import React from 'react';
import "./Components.css";
import { withRouter } from 'react-router-dom';

function Landing(props) {
  
  function signup(e) {
    e.preventDefault();
    props.history.push('/auth/signup');
  }
  
  return (
    <div className="Landing">
        <section className="landing-main-section">
          <div className="main-content">
            <h2>Active Pause</h2>
            <p>Join our community and enjoy</p>
            <button onClick={signup} className="button-primary">Join now!</button>
          </div>
          <div className="main-img">
            <img src="https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053488_960_720.jpg" alt="exercise-img"></img>
          </div>
        </section>
    </div>
  );
}

export default withRouter(Landing);
