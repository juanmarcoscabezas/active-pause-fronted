import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import "./Form.css";

function Signup(props) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitForm(e) {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
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

    fetch('http://localhost:3000/auth/signup', config)
    .then(res => res.json())
    .then(
      (result) => {
        if (!result.error) {
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          alert('Success registration');
          props.history.push('/auth/login');
        } else {
          alert(result.message);
        }
      },
      (error) => {
        console.log(error);
      }
    )
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
        <h2 className="page-title">ActivePause Registration</h2>
        <form className="login-form" onSubmit={submitForm}> 
            <h3>Signup</h3>
            <div className="twelve columns">
              <label htmlFor="exampleEmailInput">First name</label>
              <input onChange={changeFirstName} className="u-full-width" type="text" placeholder="Juan Marcos" name="email"/>
            </div>
            <div className="twelve columns">
              <label htmlFor="exampleEmailInput">last name</label>
              <input onChange={changeLastName} className="u-full-width" type="text" placeholder="Cabezas" name="email"/>
            </div>
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

export default withRouter(Signup);
