/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import LanguageProvider from './src/context/LanguageContext';

AppRegistry.registerComponent(appName, () => LanguageProvider);
