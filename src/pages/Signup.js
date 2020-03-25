import React from 'react';
import "./Form.css";

function Signup() {
  return (
    <div className="Signup">
        <h2 className="page-title">ActivePause Registration</h2>
        <form className="login-form"> 
            <h3>Signup</h3>
            <div class="twelve columns">
              <label for="exampleEmailInput">First name</label>
              <input class="u-full-width" type="email" placeholder="Juan Marcos" name="email"/>
            </div>
            <div class="twelve columns">
              <label for="exampleEmailInput">last name</label>
              <input class="u-full-width" type="email" placeholder="Cabezas" name="email"/>
            </div>
            <div class="twelve columns">
              <label for="exampleEmailInput">Your email</label>
              <input class="u-full-width" type="email" placeholder="test@mailbox.com" name="email"/>
            </div>
            <div class="twelve columns">
              <label for="exampleEmailInput">Your password</label>
              <input class="u-full-width" type="password" placeholder="mypassword" name="password"/>
            </div>
        </form>
    </div>
  );
}

export default Signup;
