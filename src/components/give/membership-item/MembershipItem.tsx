import React from 'react';

export const MembershipItem: React.FC = () => {
  return (
    <div className="row" id="membershipItem">
      <div className="order-item yearly-plan slim">
        <div className="col-md-3">
          <img src="./img/membership-user.png" alt="gift-box" width="185" height="204" />
        </div>
        <div className="col-md-7">
          <h3 className="item-name">Acorn TV Membership - Annual</h3>
        </div>
        <div className="col-md-2 text-right">
          <div>USD$59.99</div>
          <div className="form-group">
            <strong>Qty: 1</strong>
            <div className="controls">
              <p className="remove">
                x
                <a href="/">Remove this item</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
