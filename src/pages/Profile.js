import React from 'react';
import { connect } from 'react-redux';

function Profile(props) {
  return (
    <div className="Profile">
        <h1>My Profile</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps) (Profile);
