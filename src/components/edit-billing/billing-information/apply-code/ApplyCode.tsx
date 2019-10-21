import React from 'react';

export const ApplyCode: React.FC = () => {
  return (
    <div id="appliedCode" style={{ display: 'none' }}>
      <h3 className="formhead">Code to be Applied</h3>
      <div className="row">
        <div className="control-group">
          The following will be applied to your account.
          <div className="controls">
            <span id="codeName">
              ABCDEFG
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
