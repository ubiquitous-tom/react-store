import { useState, useEffect } from 'react';

export interface Locale {
  results: [];
}

export const GetLocaleService = () => {
  const [results, setResult] = useState('en');

  useEffect(() => {
    fetch('https://app.rlje.net/dev/i18n/api/lang.json')
      .then((response) => { response.json(); })
      .then((response) => { console.log(response); })
      .catch((error) => { console.log(error.json()); });
  }, []);
  return results;
};

// export default GetLocaleService;
