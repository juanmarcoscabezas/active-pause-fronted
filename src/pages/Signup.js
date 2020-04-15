import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import apiRequest from '../http/request';
import "./Form.css";

function Signup(props) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submitForm(e) {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password
    };

    const result = await apiRequest('POST', 'auth/signup', user);
    if (result !== null) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      alert('Success registration');
      props.history.push('/auth/login');
    }
  }

  function changeFirstName(e) {
    e.preventDefault();
    setFirstName(e.target.value);
  }

  function changeLastName(e) {
    e.preventDefault();
    setLastName(e.target.value);
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
    <div className="Signup">
        <form className="login-form" onSubmit={submitForm}> 
            <h4>Sign up</h4>
            <div className="twelve columns">
              <label htmlFor="firstName">First name</label>
              <input onChange={changeFirstName} className="u-full-width" type="text" placeholder="John" name="firstName"/>
            </div>
            <div className="twelve columns">
              <label htmlFor="lastName">Last name</label>
              <input onChange={changeLastName} className="u-full-width" type="text" placeholder="Arnold" name="lastName"/>
            </div>
            <div className="twelve columns">
              <label htmlFor="email">Email</label>
              <input onChange={changeEmail} className="u-full-width" type="email" placeholder="test@mail.com" name="email"/>
            </div>
            <div className="twelve columns">
              <label htmlFor="password">Password</label>
              <input onChange={changePassword} className="u-full-width" type="password" placeholder="mypassword" name="password"/>
            </div>
            <div className="twelve columns">
              <input className="button-primary" type="submit" value="Submit"/>
            </div>
        </form>
    </div>
  );
}

export default withRouter(Signup);
