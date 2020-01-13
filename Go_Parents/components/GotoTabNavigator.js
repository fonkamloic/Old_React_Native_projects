import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Student from './Student';
import AddStudent from './AddStudent';
import HomeScreen from '../screens/HomeScreen';

import { 
    View,
    Text,
    StyleSheet
} from "react-native";

export default class Goto extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}


const AppNavigator = createStackNavigator({
    AddStud: AddStudent
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});