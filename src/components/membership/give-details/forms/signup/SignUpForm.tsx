import React from 'react';

import './SignUpForm.css';

export const SignUpForm: React.FC = () => {
  return (
    <aside id="signUpForm" className="sign-in">
      <h4>sign up</h4>

      <div className="row">
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="firstName" className="control-label">
            First Name *
              <span>(Required)</span>
            </label>
            <input id="firstName" className="form-control" name="firstName" type="text" defaultValue="" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <label htmlFor="lastName" className="control-label">
            Last Name *
              <span>(Required)</span>
            </label>
            <input id="lastName" className="form-control" name="lastName" type="text" defaultValue="" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10">
          <div className="form-group">
            <label htmlFor="email" className="control-label">
            Email Address
              <span>(Required)</span>
            </label>
            <input id="email" className="form-control" name="email" type="text" defaultValue="" />
          </div>
        </div>
      </div>

      <div className="row">
        <p>
          Need to renew your Acorn TV membership?
          <a href="/#" id="signInLink">Sign In</a>
          .
        </p>
      </div>
    </aside>
  );
};
