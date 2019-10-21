import React from 'react';
import { OrderSummary } from './order-summary/OrderSummary';

export const Information: React.FC = () => {
  return (
    <div className="row">
      <div className="col-md-5">
        <h1>Acorn TV Checkout</h1>
        <h2>Billing Information</h2>
        <p>To make your purchase, please fill in the form below.</p>
      </div>

      <div className="col-md-1" />

      <div className="col-md-2" style={{ marginTop: '20px' }}>
        <img src="./img/secure_payments_powered_stripe.png" alt="Secure payments powered by Stripe" width="110" />
      </div>

      <div className="col-md-4">
        <div id="orderItems">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};
