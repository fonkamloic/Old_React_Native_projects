import React, { Component } from "react";
import {StyleSheet,
        Text,
        View,
        TouchableHighlight,
        TouchableWithoutFeedback,
        Animated
        } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


class Panel extends Component{
    constructor(props){
        super(props);

        this.state = {       
            title       : props.title,
            expanded    : false,
            animation   : new Animated.Value(),
            maxHeight   : '',
            minHeight   : '',
        };
    }
    

    toggle(){
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        })

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
        
    }

    

    _setMaxHeight(event){
        if(this.state.maxHeight === ''){
            this.setState({
            maxHeight   : event.nativeEvent.layout.height
            });
        }
    }

    _setMinHeight(event){
        if(this.state.minHeight === ''){
            this.setState({
            minHeight : event.nativeEvent.layout.height,
            animation: new Animated.Value(event.nativeEvent.layout.height),

            });
                
        }
    }

    render(){
        //Step 5
        return ( 
            <Animated.View style={[styles.container,{ height: this.state.animation }]} >
            
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <TouchableWithoutFeedback onPress={this.props.gotoSubpage}>
                        <Text style={styles.title}>{this.state.title}</Text>
                    </TouchableWithoutFeedback>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={()=>this.toggle()}
                        underlayColor="#f1f1f1" >
                        <Icon style={styles.buttonImage} name={ this.state.expanded ?  'caret-up': 'caret-down'} size={25}/>
                    </TouchableHighlight>
                </View>
                
                <View  style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
        
            </Animated.View>
        );
    }
}
export default Panel;

const styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        margin:10,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25,
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
});