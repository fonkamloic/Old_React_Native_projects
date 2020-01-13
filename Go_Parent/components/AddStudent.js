import React, { Component } from "react";
import Student from './Student';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Picker,
    TouchableOpacity,
} from "react-native";

export default class AddStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            matricule: '',
            sex: 'Male',
        }

    }
    

        render(){
            return (
                <View style={styles.container}>
                    <View style={styles.each}>
                        <Text style={styles.text}>Student's name: </Text>
                        <TextInput placeholder="Enter name..."
                                    style={styles.textInput}
                                    value={this.state.name}
                                    onChangeText={(text) =>this.setState({name: text})}

                                    />

                    </View>
                    <View style={styles.each}>
                        <Text style={styles.text}>Student's Matricule: </Text>
                        <TextInput placeholder='Matricule...'
                                    style={styles.textInput}
                                    value={this.state.matricule}
                                    onChangeText={(text) =>this.setState({matricule: text})}

                                    />
                    </View>
                    <View style={[styles.sex, styles.each]}>
                        <Text style={styles.text}>Sex</Text>
                        <Picker selectedValue={this.state.sex} style={{height: 50, width: 50, marginTop: -6}} onValueChange={(itemValue, itemIndex) =>{
                            this.setState({sex: itemValue})
                        }}>
                            <Picker.Item label="Male" value="Male"/>
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Non-Binary" value='Non-Binary' />
                        </Picker>
                    </View>
                    <Text style={{paddingLeft: 15, fontStyle: 'italic', fontSize: 20,  marginTop: -15}}>{this.state.sex}</Text>

                        <TouchableOpacity style={styles.buttonPosition} onPress={() => {
                            if(this.state.name.trim() === '' || this.state.name.trim() === 'Name is required'){
                                this.setState({
                                    name: 'Name is required'
                                });
                                return;
                            }if(this.state.matricule.trim() === '' || this.state.name.trim() === 'Name is required'){
                                this.setState({
                                    matricule: 'Matricule is required'
                                });
                                return;
                            }else {
                                let tmpName = this.state.name
                                let tmpMatricule = this.state.matricule
                                let tmpSex = this.state.sex
                                this.props.navigation.navigate("Home", {name: tmpName, matricule: tmpMatricule, sex: tmpSex });
                            }
                        }} >
                            <Text style={[styles.button]}>ADD</Text>
                        </TouchableOpacity>
                </View>
            )
        };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 15,
    },
    each: {
        marginBottom: 15,
    },
    sex:{
        flexDirection: 'row',
        marginRight: 10,
    },
    text:{
        fontSize: 25,
    },
    button: {
        fontWeight: 'bold',
        fontSize: 19
    },
    buttonPosition: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 70,
        height: 40,
        bottom: 20,
        right: 20,
        backgroundColor: '#60cde5',
        borderRadius: 10,
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 18,

    }
});
