import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';


//class App extends React.Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Home/>
//      </View>
//    );
//  }
//}
const AppNavigator = createStackNavigator({
    home: Home,
    dashboard: Dashboard,
})

const styles = StyleSheet.create({
  container: {

      marginTop : Constants.statusBarHeight,  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppNavigator);
