import React from 'react';

import './BillingInformation.css';

import { BillingInformationHeader } from './header/BillingInformationHeader';
import { BillingAddress } from './billing-address/BillingAddress';
import { ApplyCode } from './apply-code/ApplyCode';
import { BillingEmail } from './billing-email/BillingEmail';
import { PaymentMethod } from './payment-method/PaymentMethod';
import { BillingFAQ } from './billing-faq/BillingFAQ';

export const BillingInformation: React.FC = () => {
  return (

    <div className="BillingInformation">
      <BillingInformationHeader />

      <div className="row">
        <div className="col-md-8">
          <div className="form-wrap">
            <form className="form-trial-signup form-processing">
              <ApplyCode />

              <BillingAddress />

              <BillingEmail />

              <PaymentMethod />

              <div id="updateBillingAlert" className="alert" style={{ display: 'none' }} />

              <div className="control-group">
                <div className="controls">
                  <a className="btn btn-large btn-primary text-right" id="savePayment" href="/">
                    Continue to Review & Place Order
                    <i className="icon-circle-arrow-right" />
                  </a>
                </div>
              </div>
            </form>

            <div id="updateBillingModal" className="modal fade" role="dialog" aria-labelledby="updateBillingLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 id="confirm-cancel-label">UPDATE-BILLING-INFORMATION</h3>
                  </div>
                  <div className="modal-body">
                    <h4 id="updateBillingStatus" />
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-primary btn-confirmation" data-dismiss="modal">Okay</button>
                  </div>
                </div>
              </div>
            </div>

            <p className="legal" style={{ marginTop: '4em' }}>
              Your membership takes effect as soon as we receive your order. Gift memberships take effect as soon as access codes are redeemed.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <BillingFAQ />
        </div>

      </div>
    </div>
  );
};
