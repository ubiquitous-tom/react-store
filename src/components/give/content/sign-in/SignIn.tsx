import React from 'react';
import './SignIn.css';

export const SignIn: React.FC = () => {
  return (
    <div className="col-md-5">
      <aside className="sign-in">
        <form>
          <h4>Acorn TV Members, </h4>
          <div className="form-group">
            <label htmlFor="email" className="control-label">
                  Email Address
              <small>Required</small>
            </label>
            <input className="form-control" id="email" name="email" type="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="control-label">
                Password
              <small>Required</small>
            </label>
            <input className="form-control" id="password" name="password" type="password" required />
          </div>
          <button type="submit" className="btn btn-success">
              Sign In
          </button>
          <div>
            <a href="/forgotpassword.jsp" target="_blank">
                  Forgot Your Password?
            </a>
          </div>
        </form>
      </aside>
    </div>
  );
};
