import React , { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import StudentInfo from "./StudentInfo";
import CaResults  from "./CaResults";
import EnrollCourses from "./EnrollCourses";
import FinalResults from "./FinalResults";
import  LecturesInfos from "./LecturesInfos";
import  PayFee from "./PayFee";
import  PayTranscript  from "./PayTranscript";
import  TransDetail  from "./TransDetail";
import Panel from "../components/Panel";

import {
      Text,
      View,
      ScrollView,
      StyleSheet,
      Button,
      Dimensions,
      Image,
      Animated,
      AppRegistry,
} from 'react-native';



const { width, height } = Dimensions.get('window')

class Profile extends Component{
  constructor(){
    super();
    this.state={
      name: '',
      matricule: '',
      sex: 'Male',
    };
    
  }


  componentWillReceiveProps(){
    const { navigation } = this.props;
    this.setState({
      name: navigation.getParam('name', ''),
      matricule: navigation.getParam('matricule', ''),
      sex: navigation.getParam('sex', ''),
    })
  };

  gotoSubpage(page){
        this.props.navigation.navigate(page, {title: this.state.name });
    }

  render(){
    let space = `
  
  `;
        let sex = this.state.sex === "Female" ? true : false;
    return (
      <ScrollView style={styles.container}>
      <Image 
                style={{ marginLeft: (width / 3) + 10, width: 100, height: 100, }}
                source={
                      sex
                  ? require('../images/fuser-Graduate-512.png')
                  : require('../images/muser-graduate-512.png')
                }
            />
        <Panel title="STUDENT INFORMATION" gotoSubpage={()=>this.gotoSubpage('StudInfo')} >
          <Text>Here will be your child's information like; Faculty, Department, Level of study , matricule etc</Text>
        </Panel>
        <Panel title="CA RESULTS" gotoSubpage={()=>this.gotoSubpage('CApage')}>
          <Text>Here you can see your child Continous Assesments (C.A.) Results. C.A. counts 30% of the of the total Exams marks.</Text>
        </Panel>
        <Panel title="FINAL RESULTS" gotoSubpage={()=>this.gotoSubpage('FEpage')}>
          <Text>Here will be your child Final Examinations Results. It includes the 30% of C.A results</Text>
        </Panel>
      
        <Panel title="ENROLLED COURSES" gotoSubpage={()=>this.gotoSubpage('ECpage')}>
          <Text>Here you will see the list of course your child is currently enrolled in.</Text>
        </Panel>
        <Panel title="PAY FEES" gotoSubpage={()=>this.gotoSubpage('PFpage')}>
          <Text>You can pay you child school fees here.</Text>
        </Panel>
        <Panel title="PAY FOR A TRANSCRIPT" gotoSubpage={()=>this.gotoSubpage('PTpage')}>
          <Text>You can pay for transcript here, then print out a receipt and take it to the transcript office</Text>
        </Panel>
        <Panel title="LECTURER'S INFORMATION" gotoSubpage={()=>this.gotoSubpage('LIpage')}>
          <Text>Here you will see a list of your child lecture, and their email addresses</Text>
        </Panel>
        <Panel title="TRANSACTION DETAILS" gotoSubpage={()=>this.gotoSubpage('TDpage')}>
          <Text>Here you will be able to print out receipt of all transcaction you have made</Text>
        </Panel>
        <Text>{space}</Text>
      </ScrollView>
    );
  }
}

const AppContainer = createStackNavigator({
  Prof: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  StudInfo: {
    screen: StudentInfo,
    navigationOptions: {
      title: "You child's information"
    },
  },
  CApage: {
    screen: CaResults,
    navigationOptions: {
      title: "This is how it's gonna look like"
    },
  },
  FEpage: {
    screen: FinalResults,
    navigationOptions: {
      title: "This is how it's gonna look like"
    },
  },
  TDpage: {
    screen: TransDetail,
    navigationOptions: {
      title: "Transcaction Details"
    },
  },
  PFpage: {
    screen: PayFee,
    navigationOptions: {
      title: "Pay Fees"
    },
  },
  ECpage: {
    screen: EnrollCourses,
    navigationOptions: {
      title: "Enrolled Courses"
    },
  },
  PTpage: {
    screen: PayTranscript,
    navigationOptions: {
      title: "Pay For a Transcript"
    },
  },
  LIpage: {
    screen: LecturesInfos,
    navigationOptions: {
      title: "Your child's Lecturers"
    },
  },
})

const ProfilePage = createAppContainer(AppContainer)

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30,
    paddingBottom   : 30,
  },
  
});










