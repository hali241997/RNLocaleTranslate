import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {useTranslation} from './context/LanguageContext';

const App = () => {
  const [strings, currentLanguage, updateLanguage] = useTranslation();

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 22,
          textAlign: currentLanguage === 'ar' ? 'right' : 'left',
        }}>
        {strings.hello}
      </Text>

      <Button
        title="Change Language"
        onPress={() => {
          updateLanguage(currentLanguage === 'en' ? 'ar' : 'en');
        }}
      />
    </SafeAreaView>
  );
};

export default App;
