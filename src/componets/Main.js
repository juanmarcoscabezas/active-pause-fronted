import React, { useState, useEffect } from 'react';
import Pause from './Pause/Pause';
import apiRequest from '../http/request';
import { connect } from 'react-redux';

function Main(props) {

  const [pauses, setPauses] = useState([]);

  useEffect(() => {
    getPauses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPauses() {
    const result = await apiRequest('GET', 'playlist', null, props.auth.accessToken);
    if (result !== null) {
      setPauses(result);
    }
  }

  return (
    <div className="Main">
        <section>
          <Pause pauses={pauses}/>
        </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps)(Main);
