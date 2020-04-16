import React from 'react';
import { connect } from 'react-redux';
import Landing from '../componets/Landing/Landing';
import Main from '../componets/Main/Main';

function Home(props) {
  return (
    <div className="Home">
        {
          (
            props.auth.accessToken === null
            ? <Landing/>
            : <Main/>
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
