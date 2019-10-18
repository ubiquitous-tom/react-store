import React from 'react';

export const RecordedBooksTitle: React.FC = () => {
  const membershipStatus = 'EXPIRED';

  function getRecordedBooksTitle(): string {
    return (membershipStatus !== 'EXPIRED') ? 'FREE-SEVEN-DAYS' : 'FREE-ACCESS-ENDED';
  }

  return (
    <aside id="recBooks" className="recBooks">
      <h4>{getRecordedBooksTitle()}</h4>
      <p>SIGNUP-FULL-MEMBERSHIP</p>
    </aside>
  );
};

export const RecordedBooksSignedIn: React.FC = () => {
  const cloudFrontCountry = 'US';
  const customerName = 'Tom';
  const customerWebPaymentEdit = false;
  const membershipDevice = 'Web';
  const membershipTerm = 'MONTH';
  const membershipExpirationDate = '123456789';

  function getRecordedBooksCustomerName() {
    return customerName;
  }

  function getRecordedBooksMembershipType() {
    if (membershipExpirationDate) {
      return `MEMBERSHIP-SET-EXPIRE${{ membershipExpirationDate }}`;
    }
    if (membershipTerm === 'MONTH') {
      return `YOUR-MEMBERSHIP-TYPE${<strong>{(membershipTerm == 'MONTH' ? 'MONTHLY' : 'ANNUAL')}</strong>}`;
    }
  }

  function webPaymentEdit() {
    if (customerWebPaymentEdit) {
      if (['MONTH', 'TRIAL'].includes(membershipTerm)) {
        return <a href="#" id="changeToAnnual">"CHANGE-TO-ANNUAL"</a>;
      }

      // if (membershipTerm == 'ANNUAL' && membershipExpirationDate) {
      //   return <a href="#" id="renewMembership">"RENEW-MEMBERSHIP"</a>;
      // }
    } else {
      return `'MANAGE-BILLING-DETAILS' ${membershipDevice}. "PLEASE-LOG-IN" ${membershipDevice} to "MANAGE-BILLING"`;
    }
  }

  function giveGift() {
    if (cloudFrontCountry === 'US') {
      return <a href="/" id="giveGift">GIVE-ACORNTV</a>;
    }

    return '';
  }
  return (
    <aside id="signedIn" className="signedIn <\%= session.LoggedIn ? '' : 'hide' %>">
      <h4>
        `HELLO
        <span>{getRecordedBooksCustomerName()}</span>
        ,
        ALREADY-MEMBER`
      </h4>
      {getRecordedBooksMembershipType()}
      <a className="btn btn-primary" href="https://acorn.tv">Watch Now</a>
      <p>
        {webPaymentEdit()}
        {giveGift()}
      </p>
    </aside>
  );
};
