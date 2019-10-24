import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Cookies from 'universal-cookie';

import './Header.css';

import UserInfoService from '../../../services/user/UserInfoService';

export interface UserInfoType {
  BillingAddress?: Record<string, any>;
  Customer?: Record<string, any>;
  Membershp?: Record<string, any>;
  PaymentMethod?: Record<string, any>;
  Session?: Record<string, any>;
  Streaming?: Record<string, any>;
  trialAvailable?: Record<string, any>;
}

export const Header: React.FC = () => {
  const [userInfo, setUserInfo] = useState(false);
  const [webPaymentEdit, setWebPaymentEdit] = useState(false);

  const cookies = new Cookies();
  const atvSessionCookie = cookies.get('ATVSessionCookie');
  console.log(atvSessionCookie);

  const user = new UserInfoService();

  useEffect(() => {
    console.log('useEffect');
    user.getUserStatus(checkUserStatus);
  }, []);

  function checkUserStatus(data: any) {
    console.log(data);
    setUserInfo(data);
  }

  function webPaymentEditNav() {
    console.log('webPaymentEditNav', userInfo);
    // const { Membership: } = userInfo;
    // console.log(Membership);
    // const { webPaymentEdit } = Membership;

    // console.log(webPaymentEdit);
    return (
      <li className="navbar-right">
        <Link className="log-in" to="/applyPromoCode">
          Promo Code or Gift Code
        </Link>
      </li>
    );
  }

  function loggedInNav() {
    return (
      <>
        <li className="navbar-right">
          <Link className="log-in" to="/logout">
          log out
          </Link>
        </li>
        {webPaymentEdit && webPaymentEditNav()}
      </>
    );
  }

  function notLoggedInNav() {
    return (
      <>
        <li className="navbar-right sign-up">
          <Link className="free-month" to="/">
            Start Free Trial
          </Link>
        </li>
        <li className="navbar-right">
          <Link className="log-in" to="/signin.jsp?OperationalScenario=STORE">
            log in
          </Link>
        </li>
      </>
    );
  }

  function displayNavBar() {
    // user.getUserStatus(checkUserStatus);
    console.log(userInfo);
    if (userInfo) {
      return loggedInNav();
    }

    return notLoggedInNav();
  }

  return (
    <Router>
      <header>
        <div className="navbar navbar-fixed-top" role="navigation">
          <div className="container">

            <ul className="navbar-right-ul">
              {displayNavBar()}
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
