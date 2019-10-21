import React from 'react';

export const Subscribe: React.FC = () => {
  return (
    <article className="col-md-7">
      <section className="memberOptIn">
        <h4>Subscribe to Acorn TV</h4>
        <span>Subscribing is easy! We will add the membership to your order below</span>
        <label htmlFor="becomeMember" className="control-label">
          <input id="becomeMember" name="becomeMember" type="checkbox" />
          Yes, I would like to subscribe. Add an Acorn TV membership for me
        </label>
        <p>To order your gift(s) without being a member, simply click Checkout below.</p>
      </section>
    </article>
  );
};
