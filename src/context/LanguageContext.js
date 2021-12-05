import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import App from '../App';
import ar from '../lang/ar.json';
import en from '../lang/en.json';

const languageObj = {en, ar};

export const LanguageContext = createContext();

const LanguageProvider = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    getCurrentLanguage();
  }, [getCurrentLanguage]);

  const getCurrentLanguage = React.useCallback(async () => {
    setSelectedLanguage((await AsyncStorage.getItem('@currentLang')) ?? 'en');
  }, []);

  const updateLanguage = React.useCallback(async languageKey => {
    setSelectedLanguage(languageKey);
    await AsyncStorage.setItem('@currentLang', languageKey);
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
