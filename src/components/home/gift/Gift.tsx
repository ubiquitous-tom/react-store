import React from 'react';

export const Gift: React.FC = () => {
  const cloudFrontCountry = 'US';
  // Hide Gifting when in Australia
  // if (cloudFrontCountry !== 'AU') {
  //   return '';
  // }

  return (
    <section id="landing-gift">
      <div className="container">
        <div className="clearfix">
          <div className="hidden-xs hidden-sm col-md-6 col-lg-6 asset">
            <img src="img/gift-device.png" alt="" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 description">
            <h6>Purchase A Gift</h6>
            <h4>Give the gift of great TV</h4>
            <p>Your gift purchase entitles the recipient to a one year Acorn TV membership.They&apos;ll enjoy hundreds of the best British mysteries, dramas, and comedies—all in one place, always available, and always commercial-free.</p>
            <a href="#give">Give A Gift</a>
          </div>
        </div>
      </div>
    </section>
  );
};
