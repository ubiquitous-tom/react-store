import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

export const AuthService = () => {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const cookies = new Cookies();
  const atvSessionCookie = cookies.get('ATVSessionCookie');

  useEffect(() => {
    if (checkATVSessionCookie()) {
      setLoggedInStatus(true);
    }
  });

  const [userCookie, setUserCookie] = useCookies(['ATVSessionCookie']);

  function signIn() {
    const username = 'pat.crews+trial1@valtira.net';
    const password = 'badPassword';
    const refererURL = 'localhost';
    console.log(atvSessionCookie);
    if (atvSessionCookie) {
      const signUpSplitScenario = 'TRIAL_SIGNUP';
      const requestBody = {
        App: {
          AppVersion: 'Sign-Up-Website',
        },
        Credentials: {
          Username: username,
          Password: password,
        },
        Request: {
          SplitScenario: signUpSplitScenario,
          OperationalScenario: 'SIGNIN',
          Referer: refererURL,
        },
      };
      console.log(requestBody);
      fetch('https://dev-api.rlje.net/acorn/initializeapp', {
        method: 'post',
        body: JSON.stringify(requestBody),
        credentials: 'include',
      })
        .then((resp) => {
          const data = resp.json();
          console.log(data);
          return data;
        })
        .then((data) => {
          console.log(data);
        });
    }
  }

  function checkATVSessionCookie() {
    if (atvSessionCookie) {
      return true;
    }

    return false;
  }
};
