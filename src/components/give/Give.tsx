import React from 'react';

import { Header } from '../shared/header/Header';
import { Footer } from '../shared/footer/Footer';
import { CurrencyDropdown } from '../shared/currency-dropdown/CurrencyDropdown';

import { Details } from './details/Details';
import { Content } from './content/Content';
import { GiftItem } from './gift-item/GiftItem';
import { MembershipItem } from './membership-item/MembershipItem';
import { Checkout } from './checkout/Checkout';

import { Legal } from './legal/Legal';

export const Give: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="page-wrap" id="contentSection">
        <div className="give store container">
          <Details />
          <Content />

          <CurrencyDropdown />

          <GiftItem />
          <MembershipItem />
          <Checkout />

          <Legal />
        </div>
      </div>
      <Footer />
    </div>
  );
};
