import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HelloWorld</Text>
            </View>
        );
    }
}
export default HelloWorld;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});