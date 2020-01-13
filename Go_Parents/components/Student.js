import React from 'react';
import { Text, Image, StyleSheet, View, ScrollView, TouchableOpacity , Dimensions} from 'react-native';
import FloatingButton from './FloatingButton';
import AddStudent from './AddStudent';
import Icons from 'react-native-vector-icons/Foundation';

const {width, height} = Dimensions.get('window')
export default class Student extends React.Component{
  constructor(){
        super();
      this.state = {
        myChildrens: [],
        matricule: '',
      };
     newRow = this.state.myChildrens
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.matricule !== this.props.matricule){
        let row = []
        row.push(
          <TouchableOpacity key={nextProps.matricule} style={styles.childFrame}>
            <Icons style={styles.icon} name={nextProps.sex == 'Male'? 'torso-business': 'torso-female'} size={100} color='#fff' />
            <View style={styles.textContainer}>
                <Text style={styles.text} >{nextProps.name}</Text>
                <Text style={styles.text}>{nextProps.matricule}</Text>
                <Text style={styles.text}>{nextProps.sex}</Text>
            </View>
          </TouchableOpacity>
        )
        newRow.push(row)
      this.setState({
        matricule: this.props.matricule,
        myChildrens: newRow,
      })
    }
  }

  render(){
        return(
            <View style={styles.container}>
              {this.state.myChildrens}
            </View>
        )
  }
}

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
   borderColor: "gray",
   borderRadius: 20,
   justifyContent: 'center',
   alignItems: 'center',
   width: width - 150,
   height: height / 6,
   backgroundColor: "#00B16F",
   marginBottom: 10,
  },
  text:{
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
  },
  textContainer:{
    marginLeft: -25,

  },
  icon:{
    justifyContent: 'center',
    marginRight: 50,
  },

});
