import React from 'react';

export const Callout: React.FC = () => {
  return (
    <section className="hidden-xs" id="landing-callout">
      <div className="container">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <h4>FAVORITE-SHOWS</h4>
          <p className="hidden-xs">ACORN-CATALOG</p>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-offset-1 col-md-3 col-lg-offset-1 col-lg-3 col-right">
          <a href="http://www.acornonline.com?utm_source=acorntv">
            <button type="button" id="acorn-online">VISIT-ACORN</button>
          </a>
        </div>
      </div>
    </section>
  );
};
