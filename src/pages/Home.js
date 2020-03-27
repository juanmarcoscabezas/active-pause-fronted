import React from 'react';
import { connect } from 'react-redux';
import Landing from '../componets/Landing';
import Main from '../componets/Main';

function Home(props) {
  return (
    <div className="Home">
        {
          (
            props.auth.token === null
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
