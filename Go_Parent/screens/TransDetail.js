import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class TransDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>All your transcaction details will be soon available</Text>
            </View>
        );
    }
}
export default TransDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});