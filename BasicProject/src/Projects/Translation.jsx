import React from 'react';
import { useLocalization } from './LoaclizationContext';

function Greeting() {
  const { locale, setLocale, localizedStrings } = useLocalization();

  return (
    <div>
      <h1>{localizedStrings[locale].greeting}</h1>
      <p>{localizedStrings[locale].welcome}</p>
      <button onClick={() => setLocale('en')}>English</button>
      <button onClick={() => setLocale('hin')}>Hindi</button>
    </div>
  );
}

export default Greeting;
