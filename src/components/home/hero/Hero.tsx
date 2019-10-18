import React from 'react';

export const Hero: React.FC = () => {
  // Hide Gifting when in Australia
  const cloudFrontCountry = 'US';
  const landingHeroClasses = 'col-sm-6 col-md-4 col-lg-4';

  const hero2 = (
    <div id="landing-hero-2" className={landingHeroClasses}>
      <div className="image second" />
      <div className="hero-item">
        <h3>Acorn TV Gift Membership</h3>
        <a href="#give">
          <button type="button">Buy Now</button>
        </a>
      </div>
    </div>
  );

  // if (cloudFrontCountry === 'AU') {
  //   landingHeroClasses = 'col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-2 col-lg-4 col-lg-offset-2';
  // }

  return (
    <div id="landing">
      <section className="visible-xs" id="landing-hero-mobile">
        <header>
          <h4 className="text-center">
            Stream World-Class TV from Britain and Beyond Always available, always commercial free. Just USD$5.99 a month.
          </h4>
          <h5 className="text-center">
            <i>
              Watch free for 7 days. Just  USD$5.99/month, plus taxes where applicable after that. No commitment: cancel within 7 days to avoid payment.
            </i>
          </h5>
          <a className="mobile" href="#membership">
            <button type="button">Subscribe</button>
          </a>
        </header>
      </section>

      <section className="hidden-xs" id="landing-hero">
        <div className="container">
          <div id="landing-hero-1" className={landingHeroClasses}>
            <div className="image first" />
            <div className="hero-item">
              <h3>Subscribe</h3>
              <a href="#membership">
                <button type="button">Buy Now</button>
              </a>
            </div>
          </div>

          {hero2}

          <div id="landing-hero-3" className="hidden-sm col-md-4 col-lg-4">
            <div className="image third" />
            <div className="hero-item">
              <h3>Start Free Trial</h3>
              <a href="/createaccount.jsp">
                <button type="button">Join Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
