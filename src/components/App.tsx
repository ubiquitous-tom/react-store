import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link,
  RouteComponentProps,
} from 'react-router-dom';

// import logo from './logo.svg';

import './App.css';

import { Home } from './home/Home';
import { Membership } from './membership/Membership';
import { Give } from './give/Give';
import { NoMatch } from './no-match/NoMatch';
import { EditBilling } from './edit-billing/EditBilling';
import { ReviewPurchase } from './reviewPurchase/ReviewPurchase';

// import { TextField } from '../TextField/TextField';

const App: React.FC = () => {
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
