import React from 'react';
import { connect } from 'react-redux';
import Landing from './Landing';
import Pause from './Pause';

function Home(props) {
  return (
    <div className="Home">
        {
          (
            props.auth.token === null
            ? <Landing/>
            : <Pause/>
          )
        }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps) (Home);
