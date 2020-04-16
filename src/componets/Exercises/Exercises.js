import React, { useState, useEffect } from 'react';
import SideNav from '../Nav/SideNav';
import apiRequest from '../../http/request';
import { connect } from 'react-redux';
import './Exercises.css';

function Exercises(props) {

  const [pauses, setPauses] = useState([]);

  useEffect(() => {
    getPauses();
    console.log(pauses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPauses() {
    const result = await apiRequest('GET', 'playlist', null, props.auth.accessToken);
    if (result !== null) {
      setPauses(result);
    }
  }

  return (
    <div className="Exercises">
      <section>
        <SideNav />
      </section>
      <main>
        <h1>My Exercises</h1>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps)(Exercises);
