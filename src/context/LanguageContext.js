import React, {createContext, useContext, useState} from 'react';
import App from '../App';
import en from '../lang/en.json';
import ar from '../lang/ar.json';

const languageObj = {en, ar};

export const LanguageContext = createContext();

const LanguageProvider = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const updateLanguage = React.useCallback(languageKey => {
    setSelectedLanguage(languageKey);
  }, []);

  const value = [
    {...languageObj[selectedLanguage]},
    selectedLanguage,
    updateLanguage,
  ];

  return (
    <LanguageContext.Provider value={value}>
      <App />
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const useTranslation = () => useContext(LanguageContext);
