import React , { Component } from 'react';
import { View, Text, Image } from "react-native";
export default class CaResults extends Component{
    render(){
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image 
                    style={{flex: 1}}
                    resizeMode='contain'
                    source={
                        require('../images/Ca.jpg')
                    }
                />
            </View>
        );
    }
}