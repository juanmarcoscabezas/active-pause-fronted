import React, { useState } from 'react';
import "./Form.css";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitForm(e) {
    e.preventDefault();
    fetch('https://localhost:3000/auth/login')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  }

  return (
    <div className="Login">
        <h2 className="page-title">ActivePause</h2>
        <form className="login-form" onSubmit={submitForm}> 
            <h3>Login</h3>
            <div className="twelve columns">
              <label htmlFor="exampleEmailInput">Your email</label>
              <input className="u-full-width" type="email" placeholder="test@mailbox.com" name="email"/>
            </div>
            <div className="twelve columns">
              <label htmlFor="exampleEmailInput">Your password</label>
              <input className="u-full-width" type="password" placeholder="mypassword" name="password"/>
            </div>
            <div className="twelve columns">
              <input className="button-primary" type="submit" value="Submit"/>
            </div>
        </form>
    </div>
  );
}

export default Login;
