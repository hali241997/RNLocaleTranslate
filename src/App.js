import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, SafeAreaView, Text} from 'react-native';
import './i18n';

const App = () => {
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 22,
          textAlign: i18n.language === 'ar' ? 'right' : 'left',
        }}>
        {t('hello')}
      </Text>

      <Button
        title="Change Language"
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
        }}
      />
    </SafeAreaView>
  );
};

export default App;
