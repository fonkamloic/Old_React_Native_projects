/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import HelloWorld from './components/HelloWorld';
// import Robot from './components/Robot';
// import MultipleGreeting from './components/MultipleGreeting';
import TextBlink from './components/TextBlink';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TextBlink);

