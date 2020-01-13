import {StyleSheet} from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
    heading: {
          fontSize: 25,
          textAlign: 'center',
    },
    input: {
        margin: 20,
        fontSize: 18,
        paddingTop: 5,
    },
    parent: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent: 'center',
    }, 
     
})
