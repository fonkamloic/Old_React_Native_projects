import React from 'react';
import { Text, Image, StyleSheet, View, ScrollView, TouchableOpacity , Dimensions} from 'react-native';
import FloatingButton from './FloatingButton';
import AddStudent from './AddStudent';
import Icons from 'react-native-vector-icons/Foundation';
import HomeScreen from '../screens/HomeScreen';
import {Profile} from '../screens/Profile';

const {width, height} = Dimensions.get('window')

class Child extends React.Component{

  render(){
    return (
          <TouchableOpacity onPress={() => this.props.gotoProfile(this.props.name, this.props.matricule, this.props.sex)}  style={styles.childFrame}>
            <Icons style={styles.icon} name={this.props.sex == 'Male'? 'torso-business': 'torso-female'} size={100} color='#fff' />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{this.props.name}</Text>
                <Text style={styles.text}>{this.props.matricule}</Text>
                <Text style={styles.text}>{this.props.sex == "Male"? "My Son" : "My Daughter"}</Text>
            </View>
          </TouchableOpacity>
    );
  }
}


class Student extends React.Component{
  constructor(){
        super();
      this.state = {
        myChildrens: [],
        matricule: [],
      };
  }



  componentWillReceiveProps(nextProps){
    let tmp = this.state.matricule.includes(nextProps.matricule);
    if(tmp == false ){
      let row = this.state.myChildrens
      row.push(<Child name={nextProps.name} key={nextProps.matricule} matricule={nextProps.matricule} sex={nextProps.sex} gotoProfile={this.props.browseProfile} />)
      let list = this.state.matricule
      list.push(nextProps.matricule)
      this.setState({
        matricule: list,
        myChildrens: row,
      })
    }else{alert("You already have this child in your care")}
  }


  render(){
        return(
            <View style={styles.container}>
              {this.state.myChildrens}
            </View>
        )
  }
}

export default Student;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  childFrame: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 100,
    height: height / 6,
    backgroundColor: '#60cde5',
    marginBottom: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius : 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 30,
  },
  text:{
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
  },
  textContainer:{
    flex: 2
  },
  icon:{
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },

});
