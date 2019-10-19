import React from 'react';

export const CurrentDropdown: React.FC = () => {
  return (
    <section className="currency">
      <label htmlFor="currency-select" className="control-label">
        <strong>Currency</strong>
        <select name="currencyType" id="currency-select">
          <option value="MXN-₱">MXN</option>
          <option value="USD-$">USD</option>
        </select>
      </label>
    </section>
  );
};
