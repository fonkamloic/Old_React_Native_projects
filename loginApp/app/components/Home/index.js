import React, { Component } from 'react';
import { Alert, View, Text ,TextInput, Button} from 'react-native';

import styles from './styles';

class Home extends Component {
   static navigationOptions = {
        header: null,
    }

    state = {
        username: '',
        password: ''
    }

      checkLogin() {
        const { username , password } = this.state
        if(username == 'admin' && password == 'admin') {
            this.props.navigation.navigate('dashboard')
        }
        else{
            Alert.alert('Error', 'Username/Password mismatch', [{ text: 'Okay'}])
        }
    }

    render() {
        const { heading, input, parent} = styles
        return(
            <View style={parent}>
                <Text style={heading}> Login into the application</Text>
                <TextInput 
                 onChangeText={(text) => this.setState({ username : text}) }
                 placeholder='Email/Username' underlineColorAndroid='grey' style={input} autoCapitalize= 'none'/>

                <TextInput 
                    onChangeText={(text) => this.setState({ password: text }) }
                     placeholder='Password' underlineColorAndroid='grey' style={input} secureTextEntry={true} autoCapitalize = 'none' />
                <Button title='login' onPress={() => this.checkLogin()} />
            </View>
        )
    }
}

export default Home;
