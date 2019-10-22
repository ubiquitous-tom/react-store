import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  RouteComponentProps,
} from 'react-router-dom';

import { LanguageDropdown } from './language-dropdown/LanguageDropdown';


export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const locale = 'en';

  // console.log(year, locale);

  return (
    <footer>
      <div className="container">
        <div className="copyright">
          <p>
            &copy; RLJ
            {` ${year} `}
            Entertainment, Inc. All Rights Reserved
          </p>
        </div>
        <div className="terms-condition">
          <Router>
            <ul>
              <li>
                <Link
                  className="open-dialog fancybox.iframe"
                  to={`https://app.rlje.net/terms/acorn/${locale}.html`}
                >
              Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="open-dialog fancybox.iframe"
                  to={`https://app.rlje.net/privacy/acorn/${locale}.html`}
                >
              Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="open-dialog fancybox.iframe"
                  to={`https://app.rlje.net/cookie-policy/acorn/${locale}.html`}
                >
              Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  className="open-dialog fancybox.iframe"
                  to={`https://app.rlje.net/caption-policy/${locale}.html`}
                >
              Captioning Policy
                </Link>
              </li>
            </ul>
          </Router>
        </div>

        <LanguageDropdown locale={locale} />

      </div>
    </footer>
  );
};
