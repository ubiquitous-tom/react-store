import React from 'react';

import { Header } from '../shared/header/Header';
import { Footer } from '../shared/footer/Footer';
import { Information } from './information/Information';
import { BillingInformation } from './billing-information/BillingInformation';

export const EditBilling: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="page-wrap" id="contentSection">
        <div className="billing store container">
          <Information />
          <BillingInformation />
        </div>
      </div>
      <Footer />
    </div>
  );
};
