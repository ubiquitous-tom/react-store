import React from 'react';

export const SignInForm: React.FC = () => {
  return (
    <aside id="signInForm" className="sign-in hidden">
      <p>
        <a id="backToSignup" href="/signup.jsp">
          <i className="fa fa-arrow-left" aria-hidden="true" />
          back to sign up
        </a>
      </p>
      <form>
        <h4>sign in</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="signInEmail" className="control-label">
                email
                <small>required</small>
                <input className="form-control" id="signInEmail" name="email" type="email" value="<\%=customer.Email %>" required />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="control-label">
                password
                <small>required</small>
                <input className="form-control" id="password" name="password" type="password" required />
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-success" type="submit">sign in</button>
        <a href="/forgotpassword.jsp" target="_blank">forget password</a>
      </form>
    </aside>
  );
};
