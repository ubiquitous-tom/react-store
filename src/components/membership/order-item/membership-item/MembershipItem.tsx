import React from 'react';
import './MembershipItem.css';

export const MembershipItem: React.FC = () => {
  return (
    <div className="order-item" id="membershipItem">
      <div className="col-md-8">
        <h3 className="item-name">Acorn TV Membership</h3>
        <p>Unlimited access to thousands of hours of the best British TV.</p>
      </div>
      <div className="col-md-4">
        <section className="plan monthly">
          <input id="becomeMonthlyMember" name="membership" type="radio" checked />
          <label htmlFor="becomeMonthlyMember" className="text-right">
            <div className="h4">
              <strong>Monthly</strong>
              <span>MXN₱79</span>
            </div>
            <p>Automatic monthly billing</p>
          </label>
        </section>

        <section className="plan yearly">
          <input id="becomeAnnualRenewingMember" name="membership" type="radio" />
          <label htmlFor="becomeAnnualRenewingMember" className="text-right">
            <div className="h4">
              <strong>Annual</strong>
              <span>MXN₱790</span>
            </div>
            <p>A full year of Acorn TV for the price of 10 months</p>
          </label>
        </section>
      </div>
    </div>
  );
};
