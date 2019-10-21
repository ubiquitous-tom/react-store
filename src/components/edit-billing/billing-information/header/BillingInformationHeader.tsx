import React from 'react';

import './BillingInformationHeader.css';

export const BillingInformationHeader: React.FC = () => {
  return (
    <h3 className="formhead">
      Billing Information
      <div className="help-form">
        * Indicates Required Fields
      </div>
    </h3>
  );
};
