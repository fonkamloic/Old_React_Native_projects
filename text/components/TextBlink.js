import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {
            showText: false
        };
    }
    this._interval = setInterval(() => {
        this.setState({
            showText: !this.state.showText;
        }) 
    }, 1000);

    render() {
        let textToDisplay = this.state.showText ? this.props.inputText: ' ';
        return (
            <View style={styles.container}>
                <Text>{textToDisplay}</Text>
            </View>
        );
    }
}


class TextBlink extends Component{
    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Blink inputText="Hello, how are you?"/>
                <Blink inputText='Ima fine thank you'/>
                
            </View>
        );
    }
}
export default TextBlink;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});