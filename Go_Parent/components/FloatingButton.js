import React from 'react';
import { Text,
        View,
        Animated,
        TouchableWithoutFeedback,
        StyleSheet,
      } from 'react-native';

import { Ionicons } from "@expo/vector-icons";


export default class FloatingButton extends React.Component<Props> {
      state = {
        animation: new Animated.Value(0),
      }

  toggleOpen = () => {
    const toValue = this._open ? 0 : 1;

    Animated.timing(this.state.animation, {
      toValue,
      duration: 200
    }).start();

    this._open = !this._open;
  }
  
  componentWillReceiveProps(nextProps){
    const toValue = this._open ? 0 : 1;

    Animated.timing(this.state.animation, {
      toValue,
      duration: 200
    }).start();

    this._open = !this._open;
  }
  togglePress = this.props.addStudent;

  render(){

    const bgStyle = {
      transform: [{
        scale: this.state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50]
        })
      }]
    }

    const reloadStyle = {
      transform: [{
        scale: this.state.animation
      },{
        translateY: this.state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -70]
        })
      }]
    }

    const orderStyle = {
      transform: [{
        scale: this.state.animation
      },{
        translateY: this.state.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140]
        }),

      }]
    }

    const labelPositionInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -90]
    });

    const opacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, .8, 1],
      outputRange: [0, 0, 1]
    })
    const labelStyle = {
      opacity: opacityInterpolate,
      transform: [{
        translateX: labelPositionInterpolate
      }]
    }


      return(
        <View>
            <Animated.View style={[styles.background, bgStyle]}/>
            <TouchableWithoutFeedback onPress={this.togglePress}>
                <Animated.View style={[styles.floatingButton , styles.subButtonOther, orderStyle ]}>
                  <Animated.Text style={[styles.label, labelStyle]}>Add Child</Animated.Text>
                  <Ionicons name="md-person-add" size={30} color="#555"/>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {alert("Still in development, Try Add Child")}}>
                <Animated.View style={[styles.floatingButton , styles.subButtonOther, reloadStyle ]}>
                  <Animated.Text style={[styles.label, labelStyle]}>Add Mentee</Animated.Text>
                  <Ionicons name="ios-person-add" size={30} color="#555"/>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={ this.toggleOpen} >
              <View style={[styles.floatingButton , styles.floatingButtonText]}>
              <Animated.Text style={[styles.label, labelStyle]}>add</Animated.Text>
                  <Text style={styles.plusButton}>+</Text>
              </View>
            </TouchableWithoutFeedback>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60, height: 60,
    shadowColor: "#333",
    shadowOpacity: .1,
    shadowOffset: {x:2, y:0},
    shadowRadius: 2,
    backgroundColor: 'grey',
    borderRadius: 30,
    bottom: 10, right: 10,
    elevation: 10,
  },

  background: {
    backgroundColor: "rgba(0,0,0,.2)",
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 10, right: 10,
    borderRadius: 40
  },

  floatingButtonText:
  {
    backgroundColor: '#0fA0dc',
  },

  plusButton: {
    color: 'white',
    fontSize: 35,
  },

  label:{
    color: "#FFF",
    position: "absolute",
    fontSize: 18,
    backgroundColor: 'transparent'
  },

  subButtonOther:{
    backgroundColor: '#FFF',

  },
});
