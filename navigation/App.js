import React from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n'  /
         'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n'  /
            'Shake or press menu button for dev menu',
    
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is App Component</Text>
        <Button onPress={() => this.props.navigation.navigate('Test')} title='Go to Test'/>
      </View>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is test Component!</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')} title='Go to App'/>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({ 
     Home: {
         screen: App
     },

    Test: {
        screen: Test
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default createAppContainer(AppNavigator); 
