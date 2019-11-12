import React from 'react';

import { Header } from '../shared/header/Header';
import { Footer } from '../shared/footer/Footer';

export const ApplyPromoCode: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="page-wrap" id="contentSection">
        <div className="thanks store container">
          <h1>Promo Code or Gift Code</h1>
          <form id="applyCodeForm" className="form-apply-code">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="EnterPromoCode" className="control-label">
                    Code
                    <span className="req">*</span>
                  </label>
                  <input className="form-control" type="text" name="EnterPromoCode" id="EnterPromoCode" maxLength={30} pattern="^[a-zA-Z0-9]+$" required />
                </div>
              </div>
            </div>

            <div id="applyCodeAlert" className="alert hidden" />

            <button type="submit" className="btn btn-primary">
              Apply Code
            </button>

          </form>

          <div id="applyCodeModal" className="modal fade" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h3 id="confirm-cancel-label">Promo Code or Gift Code</h3>
                </div>
                <div className="modal-body">
                  <h4 id="applyCodeStatus">WOOHOO</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary btn-confirmation" data-dismiss="modal">Okay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
