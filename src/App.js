import React from 'react';
import './App.css';
import Routes from "./Routes";
import { connect } from 'react-redux';
import Nav from './componets/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
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
