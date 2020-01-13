import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { WebBrowser } from 'expo';
import Student from '../components/Student';
import AddStudent from '../components/AddStudent';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FloatingButton from '../components/FloatingButton';
import Profile from './Profile';


const {height , width} = Dimensions.get('window');

class HomeScreen extends React.Component<{}> {
  constructor(props){
    super(props);

  }

  static navigationOptions = {
    header: null,
  };

addStudent = () => {
  this.props.navigation.navigate('AddStud');
}
gotoProfile = (name, matricule, sex) => {
    this.props.navigation.navigate('Prof', {name: name, matricule: matricule, sex: sex});
}

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', '')
    const matricule = navigation.getParam('matricule', '')
    const sex = navigation.getParam('sex', '');
    const update = navigation.getParam('update', )

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.logo}>Go-Parents</Text>
          <Image
            source={
                __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>
          <Student name={name} matricule={matricule} sex={sex} browseProfile={this.gotoProfile}/>
        </ScrollView>
        <FloatingButton addStudent={this.addStudent}/>
    </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const AppContainer = createStackNavigator({
    Home: {
      screen: HomeScreen,

    },
    AddStud: {
      screen: AddStudent,
      navigationOptions: {
        title: 'Add Child',
        headerBackTitle: "Add another child to your care"
      }
    },
    Prof: {
      screen: Profile,
      navigationOptions: {
      header: null
      }
    },
})

const App = createAppContainer(AppContainer);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft:  width / 3.5,

  },

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,

  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color:'#00B16F',
  },
});
