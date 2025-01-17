import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import apiRequest from '../http/request';
import './Form.css';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submitForm(e) {
    e.preventDefault();

    const user = {
      email,
      password
    };

    const result = await apiRequest('POST', 'auth/login', user, '');
    if (result !== null) {
      setEmail('');
      setPassword('');
      props.dispatch({
        type: 'LOGIN',
        data: result
      });
      props.history.push('/');
    }
  }

  function changeEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function changePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <div className="Login">
      <form className="login-form" onSubmit={submitForm}>
        <h4>Login</h4>
        <div className="twelve columns">
          <label htmlFor="email">Email</label>
          <input onChange={changeEmail} className="u-full-width" type="email" placeholder="test@mail.com" name="email" />
        </div>
        <div className="twelve columns">
          <label htmlFor="password">Password</label>
          <input onChange={changePassword} className="u-full-width" type="password" placeholder="mypassword" name="password" />
        </div>
        <div className="twelve columns">
          <input className="button-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps)(withRouter(Login));
