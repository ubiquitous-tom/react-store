import React, { useState, useEffect, ReactNode } from 'react';

import { GetLanguagesService } from '../../../../services/GetLanguagesService';

// https://medium.com/innovation-and-technology/deciphering-typescripts-react-errors-8704cc9ef402
interface LanguageDropdownProps {
  locale: string;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ locale }) => {
  const languages = GetLanguagesService();
  const [newLocale, setNewLocale] = useState(locale);

  useEffect(() => {
    console.log('GetLanguageService useEffect');
  });

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setNewLocale(event.target.value);
  };

  // https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
  // `keyof any` is short for "string | number | symbol"
  // since an object key can be any of those types, our key can too
  // in TS 3.0+, putting just "string" raises an error
  function hasKey<O>(obj: O, key: string | number | symbol): key is keyof O {
    return key in obj;
  }

  console.log(languages, locale);
  return (
    <div className="lang-select">
      <label className="atv-locale" htmlFor="atvLocale">
      language:
        <select
          name="atv_locale"
          id="atvLocale"
          aria-label="Locale"
          defaultValue={locale}
          onChange={handleLanguageChange}
        >
          {Object.keys(languages).map((abbr, index): ReactNode => {
            if (hasKey(languages, abbr)) {
              // Need hasKey() function so Typescript won't throw type error
              console.log(abbr, index, languages[abbr]);
              return <option key={index} value={abbr}>{languages[abbr]}</option>;
            }
            return null;
          })}
        </select>
      </label>
    </div>
  );
};
