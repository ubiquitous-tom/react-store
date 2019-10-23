import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link,
  RouteComponentProps,
} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

// import logo from './logo.svg';

import './App.css';

import { Home } from './home/Home';
import { Membership } from './membership/Membership';
import { Give } from './give/Give';
import { NoMatch } from './no-match/NoMatch';
import { EditBilling } from './edit-billing/EditBilling';
import { ReviewPurchase } from './reviewPurchase/ReviewPurchase';


const App: React.FC = () => {
  const cookies = new Cookies();
  const [userInfo, setUserInfo] = useState(false);

  const [userCookie, setUserCookie] = useCookies(['ATVSessionCookie']);

  function signIn() {
    const atvSessionCookie = cookies.get('ATVSessionCookie');
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

  function checkUserLogInStatus() {
    const atvSessionCookie = cookies.get('ATVSessionCookie');
    console.log(atvSessionCookie);
    if (atvSessionCookie) {
      fetch(`https://dev-api.rlje.net/acorn/profile?SessionID=${atvSessionCookie}`)
        .then((resp) => {
          const data = resp.json();
          console.log(data);
          return data;
        })
        .then((data) => {
          console.log(data);
          setUserInfo(data);
        });
    } else {
      setUserInfo(false);
    }
  }

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
    } else {
      checkUserLogInStatus();
    }
  });
  // const defaultValue = '';
  // const [inputValue, setValue] = useState<string | number>(defaultValue);

  // console.log(inputValue);

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
  //   setValue(e.target.value);
  // }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src="/logo.svg" className="App-logo" alt="logo" />
  //       <p>
  //         Edit
  //         <code>src/App.tsx</code>
  //         and save to reload.
  //       </p>

  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>

  //       <input
  //         value={inputValue}
  //         placeholder="Type here..."
  //         onChange={handleChange}
  //       />
  //       <p>{inputValue}</p>
  //     </header>
  //   </div>
  // );

  return (
    <HashRouter basename="/" hashType="noslash">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/give" component={Give} />
        <Route exact path="/membership" component={Membership} />
        <Route exact path="/editBilling" component={EditBilling} />
        <Route exact path="/reviewPurchase" component={ReviewPurchase} />
        <Route component={NoMatch} />
      </Switch>
    </HashRouter>
  );
};

export default App;
