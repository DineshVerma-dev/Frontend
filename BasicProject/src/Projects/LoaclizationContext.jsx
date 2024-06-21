import { createContext, useContext, useState } from "react";

const LocalizationContext = createContext();

export const useLocalization = () => {
  return useContext(LocalizationContext);
};

export function LocalizationProvider({ children }) {
  const [locale, setLocale] = useState('en');

  const localizedStrings = {
    en: {
      greeting: "Hello, world!",
      welcome: 'Welcome to my app',
    },
    hin: {
      greeting: 'Kaise ho',
      welcome: 'Meri app me aapka swagat hai',
    },
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, localizedStrings }}>
      {children}
    </LocalizationContext.Provider>
  );
}
