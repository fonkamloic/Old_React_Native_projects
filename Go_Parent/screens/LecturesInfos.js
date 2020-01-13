import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class LecturesInfos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Coming soon</Text>
            </View>
        );
    }
}
export default LecturesInfos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});