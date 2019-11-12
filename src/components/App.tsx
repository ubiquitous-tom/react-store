import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link,
  RouteComponentProps,
} from 'react-router-dom';

import './App.css';

import { Home } from './home/Home';
import { Membership } from './membership/Membership';
import { Give } from './give/Give';
import { NoMatch } from './no-match/NoMatch';
import { EditBilling } from './edit-billing/EditBilling';
import { ReviewPurchase } from './reviewPurchase/ReviewPurchase';
import { ApplyPromoCode } from './apply-promo-code/ApplyPromoCode';


const App: React.FC = () => {
  // https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1

  return (
    <HashRouter basename="/" hashType="noslash">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/give" component={Give} />
        <Route exact path="/membership" component={Membership} />
        <Route exact path="/editBilling" component={EditBilling} />
        <Route exact path="/reviewPurchase" component={ReviewPurchase} />
        <Route exact path="/applyPromoCode" component={ApplyPromoCode} />
        <Route component={NoMatch} />
      </Switch>
    </HashRouter>
  );
};

export default App;
