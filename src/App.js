import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, I18nManager, SafeAreaView, Text} from 'react-native';
import RNRestart from 'react-native-restart';
import './i18n';

const App = () => {
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView>
      <Text style={{fontSize: 22, textAlign: 'left'}}>{t('hello')}</Text>

      <Button
        title="Change Language"
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
            I18nManager.forceRTL(i18n.language === 'ar');
            RNRestart.Restart();
          });
        }}
      />
    </SafeAreaView>
  );
};

export default App;
