import React, { useState, useEffect } from 'react';
import Pause from '../Pause/Pause';
import SideNav from '../Nav/SideNav';
import apiRequest from '../../http/request';
import { connect } from 'react-redux';
import './Main.css';

function Main(props) {

  const [pauses, setPauses] = useState([]);

  useEffect(() => {
    getPauses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPauses() {
    const result = await apiRequest('GET', 'playlist/top', null, props.auth.accessToken);
    if (result !== null) {
      setPauses(result);
    }
  }

  return (
    <div className="Main">
      <section>
        <SideNav/>
      </section>
      <main>
        <Pause pauses={pauses} />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps)(Main);
