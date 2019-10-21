import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  RouteComponentProps,
} from 'react-router-dom';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const locale = 'en';

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {return void {
  //   setState()
  // }};

  console.log(year, locale);

  const LanguageDropdown = ({ locale }: { locale: string }) => {
    return (
      <div className="lang-select">
        <label className="atv-locale" htmlFor="atvLocale">
          language:
          <select
            name="atv_locale"
            id="atvLocale"
            aria-label="Locale"
            defaultValue={locale}
            // onChange={handleChange}
          >
            <option value="en">english</option>
            <option value="es">spanish</option>
          </select>
        </label>
      </div>
    );
  };

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
        <LanguageDropdown locale="en" />
      </div>
    </footer>
  );
};
