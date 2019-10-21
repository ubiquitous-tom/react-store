import React from 'react';

export const BillingFAQ: React.FC = () => {
  return (
    <div id="billingFAQ">
      <div className="well">
        <h3>FAQ</h3>
        <p>
          <strong>How do I watch Acorn TV?</strong>
          <br />
          Available on Roku, Apple TV,  Amazon Fire TV, iPhone, iPad, web and more.
        </p>
        <p>
          <strong>When do you add new shows?</strong>
          <br />
          Acorn TV adds new shows every week.
        </p>
        <p>
          <strong>Are there closed captions or subtitles available on Acorn TV programs?</strong>
          <br />
          Yes! All of our programs include closed captions and/or SDH subtitles.
        </p>
        <p>
          For more FAQs
          <a className="AcornAppLink" href="//support.acorn.tv/support/solutions/folders/1000220893" target="_blank">
          Click Here
            <i className="icon-caret-right" />
          </a>
        </p>
      </div>
    </div>
  );
};
