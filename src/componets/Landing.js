import React from 'react';
import "./Landing.css";
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
            <img src="/images/landing-img.png" alt="exercise-img"></img>
          </div>
        </section>
        <div className="circles"> 
          <div className="big"></div>
          <div className="med"></div>
          <div className="small"></div>
        </div>
    </div>
  );
}

export default withRouter(Landing);
