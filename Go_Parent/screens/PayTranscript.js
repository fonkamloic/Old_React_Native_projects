import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PayTranscript extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>You will save a lot of time with this options</Text>
            </View>
        );
    }
}
export default PayTranscript;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});