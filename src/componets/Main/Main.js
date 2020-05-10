import React, { useState, useEffect } from 'react';
import Top from '../Top/Top';
import SideNav from '../Nav/SideNav';
import apiRequest from '../../http/request';
import { connect } from 'react-redux';
import './Main.css';

function Main(props) {

  const [tops, setTops] = useState([]);

  useEffect(() => {
    getTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTop() {
    const result = await apiRequest('GET', 'playlist/top', null, props.auth.accessToken);
    if (result !== null) {
      setTops(result);
    }
  }

  return (
    <div className="Main">
      <section>
        <SideNav/>
      </section>
      <main>
        <Top tops={tops} />
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
