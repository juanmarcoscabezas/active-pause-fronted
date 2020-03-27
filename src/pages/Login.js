import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import "./Form.css";

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitForm(e) {
    e.preventDefault();

    const user = {
      email,
      password
    };

    const config = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3000/auth/login', config)
    .then(res => res.json())
    .then(
      (result) => {
        if (!result.error) {
          setEmail('');
          setPassword('');
          props.dispatch({
            type: 'LOGIN',
            data: result
          });
          props.history.push('/');
        } else {
          alert(result.message);
        }
      },
      (error) => {
        console.log(error);
      }
    )
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
        <h2 className="page-title">ActivePause</h2>
        <form className="login-form" onSubmit={submitForm}> 
            <h3>Login</h3>
            <div className="twelve columns">
              <label htmlFor="exampleEmailInput">Your email</label>
              <input onChange={changeEmail} className="u-full-width" type="email" placeholder="test@mailbox.com" name="email"/>
            </div>
            <div className="twelve columns">
              <label htmlFor="exampleEmailInput">Your password</label>
              <input onChange={changePassword} className="u-full-width" type="password" placeholder="mypassword" name="password"/>
            </div>
            <div className="twelve columns">
              <input className="button-primary" type="submit" value="Submit"/>
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

export default connect(mapStateToProps) (withRouter(Login));
