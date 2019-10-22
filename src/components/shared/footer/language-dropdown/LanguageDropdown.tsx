import React, { useState, ReactNode } from 'react';

import { GetLanguagesService } from '../../../../services/GetLanguagesService';

// https://medium.com/innovation-and-technology/deciphering-typescripts-react-errors-8704cc9ef402
interface LanguageDropdownProps {
  locale: string;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ locale }) => {
  const languages = GetLanguagesService();
  const [newLocale, setNewLocale] = useState(locale);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setNewLocale(event.target.value);
  };

  const getLanguagesOptions = () => {
    console.log(languages);
    // Object.keys(languages).map((key, index, arr) => {
    //   console.log(index, key, arr, arr[index], languages;
    //   return <option value="{key}">{index}</option>;
    // });
    console.log(typeof languages);
    // languages.forEach((value, index, arr) => {
    //   console.log(index, value, arr);
    // });

    Object.keys(languages).forEach((abbr: string) => {
      if (hasKey(languages, abbr)) {
        console.log(abbr); // key
        console.log(languages[abbr]); // value
        return <option value={abbr}>{languages[abbr]}</option>;
      }
    });
  };

  // https://dev.to/kingdaro/indexing-objects-in-typescript-1cgi
  // `keyof any` is short for "string | number | symbol"
  // since an object key can be any of those types, our key can too
  // in TS 3.0+, putting just "string" raises an error
  function hasKey<O>(obj: O, key: keyof any): key is keyof O {
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
          <option value="en">english</option>
          <option value="es">spanish</option>
        </select>
      </label>
    </div>
  );
};
