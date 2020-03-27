import React from 'react';
import './App.css';
import Routes from "./Routes";
import { connect } from 'react-redux';
import Nav from './componets/Nav/Nav';
import AuthNav from './componets/Nav/AuthNav';

function App(props) {
  return (
    <div className="App">
      {
        (
          props.auth.token === null
          ? <Nav/>
          : <AuthNav/>
        )
      }
      <Routes/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps) (App);
