import React from 'react';
import './GiftItem.css';

export const GiftItem: React.FC = () => {
  return (
    <div className="order-item gift-item slim">
      <div className="col-md-8 left">
        <h3 className="item-name">Acorn TV Gift Membership</h3>
        <p>Give 12 months of unlimited access to the best British TV</p>
      </div>
      <div className="col-md-2">
        <div className="form-group">
          <label className="control-label">
            Gift Price:
            <span>MXN₱790</span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="qty" className="control-label">
            Qty:
          </label>
          <select className="form-control inline-form-control" id="qty" name="qty">
            <option value="0">Select Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div className="col-md-2" id="quantityTotal">
        No Gift Selected
      </div>
    </div>
  );
};
