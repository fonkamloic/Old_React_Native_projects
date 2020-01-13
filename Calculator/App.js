import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Button, View } from 'react-native';
import { Constants} from 'expo';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answerText: "",
            resultText: "" 
        }
    }

    
    //updateState() {
      //  if(this.state.answerText !== ""){
        //    this.setState({
          //      resultText: this.state.answerText
            //})
        //}
    //}

    calculation(){
        let newVar = this.state.resultText.split('');
        let lastChar = newVar[newVar.length - 1];

        if(lastChar === '*' || lastChar === '/' || lastChar === '+' || lastChar === '-') {
              newVar.pop();
              this.setState({
                   answerText:  eval(newVar.join('')).toString(),
                   resultText: ""
              });
            
              return;        
        } 
           this.setState({
                answerText: eval(this.state.resultText).toString(),
                resultText: ""
           })


    }

    
    buttonPressed(text) {
        if(text === "=" ){
            if( this.state.resultText == ""){
               return; 
            }
            return this.calculation();
        }
       this.setState({
           resultText: this.state.resultText + text })

    }

    operationPressed(text) {
        let newVar = this.state.resultText.split('');
        let lastChar = newVar[newVar.length - 1];

        switch(text) {
            case 'DEL':
               if(newVar == ""){
                   this.setState(
                       prevState => ({
                           answerText: '',
                   }))
               }
                newVar.pop();
                this.setState ({
                    resultText: newVar.join('')
                });
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                if( this.state.resultText === "" ){
                    // Check if opcode is pressed to use answer as operand
                    if(this.state.answerText !== ""){
                        let answer = this.state.answerText.split('');
                        answer.push(text);
                        this.setState({
                            resultText: answer.join(''),
                        })
                       return; 
                    }
                    // do nothing if there is no answer to serve as operand 
                    else return;
                }
                if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
                    newVar.pop();
                }
                newVar.push(text); 
                this.setState({
                    resultText: newVar.join('')
                })
                break;
                    
        }
  }
  render() {
    let button =[]
    let nums =  [[9, 8, 7], [6, 5, 4], [3, 2, 1], ['.', 0, '=']]
    for(let i = 0; i < 4; i++) {
        let row = []
        for(let j = 0; j < 3; j++) {
            row.push(<TouchableOpacity key={nums[i][j]} onPress = {() => this.buttonPressed(nums[i][j])} style={styles.btn} >
                        <Text style={styles.btnText}>
                        {nums[i][j]}
                        </Text>
                    </TouchableOpacity>);
            
        }
        button.push(<View key={i} style={styles.row}>{row}</View>)
    }
     
   let operat = [ 'DEL', '+', '-', '*', '/' ]
   let opt = []
      for( let i = 0; i < 5; i++) {
        opt.push(<TouchableOpacity key={operat[i]} onPress={() => this.operationPressed(operat[i])} style={styles.btn}>
                    <Text style={[styles.btnText, styles.white]}>
                        {operat[i]}
                    </Text>
                </TouchableOpacity>);
   }       
  
    return (
      <View style={styles.container}>
        <View style={styles.results}>
            <Text style={[styles.resultText, styles.white]}>{this.state.resultText}</Text>       
        </View>
        <View style={styles.calculation}>
            <Text style={[styles.calculationText, styles.white]}>{this.state.answerText}</Text>
        </View>
        <View style={styles.buttons}>
            <View style={styles.number}>
                {button}
            </View>
            <View style={styles.operation}>
                {opt} 
           </View>
            <View style={styles.moreOperation}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:  Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
 
        results: {
            flex: 2,
            backgroundColor: 'rgb(150, 150, 190)',
            justifyContent: 'center',
            alignItems: 'flex-end',

        },
            resultText : {
                fontSize: 30,
            },
  
        calculation: {
             flex: 1, 
            backgroundColor: 'rgb(100, 170, 150)',
            alignItems: 'flex-end',
            justifyContent: 'center',
            
        },
            calculationText: {
                fontSize: 30,
            },

        buttons: {
             flexGrow: 6,
            flexDirection: 'row',
        },
            number: {
                 flex: 13,
                backgroundColor: 'rgb(200, 200, 220)',

            },
                    row: {
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    },
                    btnText: {
                        fontSize: 50,
                    },
                    
                    white: {
                        color: 'white',
                    },
    
                    btn: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                    },
            operation: {
                flex: 4,
                backgroundColor: 'rgb(100,100,120)',      
                justifyContent: 'space-around',
                alignItems: 'stretch',
            },
            moreOperation: {
                 flex: 1, 
                backgroundColor: 'gray',
            },

});
