import { useState, useEffect } from 'react';

export interface Languages {
  results: [];
}

export const GetLanguagesService = () => {
  const [results, setResults] = useState({});

  useEffect(() => {
    // https://dev.to/camilomejia/fetch-data-with-react-hooks-and-typescript-390c
    // https://react-hooks-cheatsheet.com/usestate
    fetch('https://app.rlje.net/dev/i18n/api/lang.json')
      .then((response) => { const hello = response.json(); console.log(hello); })
      .then((parsedResponse) => { setResults({ parsedResponse }); })
      .catch((error) => { console.log(error.json()); });
  }, []);
  return results;
};

// export default GetLanguagesService;
