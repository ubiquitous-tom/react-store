import React from 'react';

export const BillingEmail: React.FC = () => {
  const monthlyMembership = 0;
  function displayMonthlyMembership() {
    if (monthlyMembership > 0) {
      return (
        <div>
          <div className="form-group">
            <label htmlFor="membershipPassword" className="control-label">
              Password
              <span className="req">*</span>
              <span className="help-input">Please enter a minimum of 6 characters</span>
              <input type="password" id="membershipPassword" name="membershipPassword" className="form-control required" placeholder="" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="membershipPasswordConfirm" className="control-label">
            Confirm Password
              <span className="req">*</span>
              <input type="password" id="membershipPasswordConfirm" name="membershipPasswordConfirm" className="form-control required" placeholder="" />
            </label>
          </div>

          <div className="checkbox tos">
            <label htmlFor="agree" className="control-label">
              <input type="checkbox" id="agree" name="agree" />
              I Agree to
              <a href="https://api.rlje.net/acorntv-help/acorntv-terms-of-use.html" target="_blank">Terms Of Services</a>
            </label>
          </div>
        </div>
      );
    }
  }

  function displayOptInCheckbox() {
    return (
      <div className="checkbox">
        <label htmlFor="marketing-agree" className="control-label">
          <input type="checkbox" id="marketing-agree" name="marketing-agree" checked />
          Please send me program information and special sale announcements via email.
        </label>
      </div>
    );
  }
  return (
    <div className="billingEmail">
      <div className="form-group">
        <label htmlFor="billingEmail" className="control-label">
          Email Address
          <span className="req">*</span>
          <span className="help-input" />
        </label>
        <input type="text" value="" id="billingEmail" name="billingEmail" className="form-control required" placeholder="" />
      </div>
      <div className="form-group">
        <label htmlFor="billingEmailConfirm" className="control-label">
          Confirm Email Address
          <span className="req">*</span>
        </label>
        <input type="text" value="" id="billingEmailConfirm" name="billingEmailConfirm" className="form-control required" placeholder="" />
      </div>

      {displayMonthlyMembership()}

      {displayOptInCheckbox()}
    </div>
  );
};
