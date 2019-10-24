import { useState, useEffect } from 'react';


export interface Language {
  abbr: string;
}
export interface Languages {
  results: Language[];
}

export const GetLanguagesService = () => {
  const [results, setResults] = useState(['en']);

  useEffect(() => {
    // https://dev.to/camilomejia/fetch-data-with-react-hooks-and-typescript-390c
    // https://react-hooks-cheatsheet.com/usestate
    fetch('https://app.rlje.net/dev/i18n/api/lang.json')
      .then((response) => {
        const json = response.json();
        return json;
      })
      .then((response) => {
        // console.log(response);
        const { languages } = response[0];
        // console.log(languages);

        setResults(languages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return results;
};

// export default GetLanguagesService;
