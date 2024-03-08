/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootNavigator);
