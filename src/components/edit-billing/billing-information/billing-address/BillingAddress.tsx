import React from 'react';

export const BillingAddress: React.FC = () => {
  return (
    <div id="billingAddress">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="firstname" className="control-label">
              First Name
              <span className="req">*</span>
            </label>
            <input type="text" placeholder="" defaultValue="" name="firstname" id="firstname" className="form-control domain" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="lastname" className="control-label">
              Last Name
              <span className="req">*</span>
            </label>
            <input type="text" placeholder="" defaultValue="" name="lastname" id="lastname" className="form-control" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="billingcountry" className="control-label">
              Country
              <span className="req">*</span>
            </label>
            <select name="billingcountry" id="billingcountry" className="form-control">
              <option defaultValue="">- Country -</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="AR">Argentina</option>
              <option value="AS">American Samoa</option>
              <option value="AU">Australia</option>
              <option value="CL">Chile</option>
              <option value="CO">Colombia</option>
              <option value="DK">Denmark</option>
              <option value="EMI">Emiliano</option>
              <option value="ES">Spain</option>
              <option value="FE">FEDE</option>
              <option value="FI">Finland</option>
              <option value="GD">Grenada</option>
              <option value="GR">Greece</option>
              <option value="GU">Guam</option>
              <option value="MH">Marshall Islands</option>
              <option value="MX">Mexico</option>
              <option value="NL">Netherlands</option>
              <option value="NO">Norway</option>
              <option value="NZ">New Zealand</option>
              <option value="PE">Peru</option>
              <option value="PO">Poland</option>
              <option value="PR">Puerto Rico</option>
              <option value="SE">Sweden</option>
              <option value="UC">Un Country</option>
              <option value="UM">US Minor Outlying Islands</option>
              <option value="USMIL">US Military</option>
              <option value="VI">Virgin Islands</option>
              <option value="ZA">South Africa</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="billingzip" className="control-label">
              Zip/Postal Code
              <span className="req">*</span>
            </label>
            <input type="text" placeholder="" value="" className="form-control" name="billingzip" id="billingzip" />
          </div>
        </div>
      </div>
    </div>
  );
};
