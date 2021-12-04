import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  I18nManager,
  SafeAreaView,
} from 'react-native';
import {useTranslation} from './context/LanguageContext';

const App = () => {
  const [strings, currentLanguage, updateLanguage] = useTranslation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{strings.hello}</Text>
          {/* <Text style={styles.regularText}>
            {t('Some text goes here, some more text goes here')}
          </Text> */}
        </View>
        {/* <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Row test')}</Text>
          <View style={styles.row}>
            <Text>{t('column 1')}</Text>
            <Text>{t('column 2')}</Text>
            <Text>{t('column 3')}</Text>
          </View>
        </View> */}
        {/* <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Textinput test')}</Text>
          <TextInput style={styles.textInput} placeholder={t('Testing')} />
        </View> */}
        {/* <View style={styles.sectionWrapper}>
          <Button
            title={t('Go to Inner screen ->')}
            onPress={() => navigation.navigate('Inner')}
          />
        </View> */}
        <View style={styles.sectionWrapper}>
          <Button
            title="Change Language"
            onPress={() => {
              updateLanguage(currentLanguage === 'en' ? 'ar' : 'en');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f3f3f3',
    flex: 1,
  },
  sectionWrapper: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'left',
  },
  regularText: {
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});

export default App;
