import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './Header.css';

export const Header: React.FC = () => {
  return (
    <Router>
      <header>
        <div className="navbar navbar-fixed-top" role="navigation">
          <div className="container">

            <ul className="navbar-right-ul">
              <li className="navbar-right sign-up">
                <Link
                  className="free-month"
                  to="/"
                >
                Start Free Trial
                </Link>
              </li>
              <li className="navbar-right">
                <Link
                  className="log-in"
                  to="/signin.jsp?OperationalScenario=STORE"
                >
                log in
                </Link>
              </li>
            </ul>

            <div className="navbar-header">
              <Link to="/">
                <img
                  src="/img/atvlogo.png"
                  className="atv-logo"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Router>
  );
};
