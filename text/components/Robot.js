import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Robot extends Component {
    render() {
        const imageSource = {
            uri: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        };
        return (
            <View>
                <Image source={ imageSource}
                        style={ {width: 400, height: 400}}
                />
            </View>
        );
    }
}
export default Robot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});