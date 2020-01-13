import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Greeting extends Component {
    render() {
        return (
            <View >
                <Text>Hello {this.props.name}</Text>
            </View>
        );
    }
}

class MultipleGreeting extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Greeting name='Loic'></Greeting>
            </View>
        )
    }
}

export default MultipleGreeting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});