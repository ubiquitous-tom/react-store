import React from 'react';

import './OrderSummary.css';

import { MonthlyMembershipSummary } from './membership/MonthlyMembershipSummary';
import { AnnualMembershipSummary } from './membership/AnnualMembershipSummary';
import { GiftMembershipSummary } from './gift/GiftMembershipSummary';

import { Tax } from './tax/Tax';
import { UpdateOrder } from './update-order/UpdateOrder';
import { Total } from './total/Total';

export const OrderSummary: React.FC = () => {
  const monthlyMembership = 0;
  const annualMembership = 0;
  const giveMembership = 0;

  function displayMonthlyMembership() {
    if (monthlyMembership > 0) {
      return <MonthlyMembershipSummary />;
    }
  }

  function displayAnnualMembership() {
    if (annualMembership > 0) {
      return <AnnualMembershipSummary />;
    }
  }

  function displayGiftMembership() {
    if (giveMembership > 0) {
      return <GiftMembershipSummary />;
    }
  }
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <table>
        <caption />
        {displayAnnualMembership()}
        {displayMonthlyMembership()}
        {displayGiftMembership()}
        <Total />
        <Tax />
        <UpdateOrder />
      </table>
    </div>
  );
};
