import React from 'react';
import './GiftItem.css';

export const GiftItem: React.FC = () => {
  return (
    <div className="row">
      <div className="order-item gift-item">
        <div className="col-md-3">
          <img src="./img/gift-box.png" alt="gift-box" width="185" height="204" />
        </div>
        <div className="col-md-5">
          <h3 className="item-name">Acorn TV Gift Membership</h3>
          <p>Give 12 months of unlimited access to the best British TV</p>
        </div>
        <div className="col-md-2">
          <div className="item-price">
            <span>Gift Price: </span>
            USD$59.99
          </div>
          <div className="form-group">
            <label htmlFor="qty" className="control-label qty">
              <strong>Qty:</strong>
              <select id="qty" className="qty form-control inline-form-control" name="qty">
                <option value="0">Select Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
          </div>
        </div>
        <div className="col-md-2">
          <p>No Gift Selected</p>
        </div>
      </div>
    </div>
  );
};
