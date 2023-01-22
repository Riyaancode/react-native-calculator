import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Switch } from 'react-native';
import CustomButton from './components/CustomButton';
import { FlatListDemo } from './components/FlatListDemo';


export default function App() {


  const [screenValue, setScreenValue] = useState("")
  const [result, setResult] = useState()
  const [secondVal, setSecondVal] = useState()

  const addScreen = (value) => {
  

      if (value == "=") {
        setResult(eval(screenValue))
        
      } else if(value == '.' || value == '+' || value == '-' || value=='*' || value=='/'){
        if (value == screenValue.slice(-1) || screenValue == '') {
          
        } else {
          setScreenValue(screenValue + value)
        }

      } else {
        setScreenValue(screenValue + value)
        
      }


  }


let rows = [];
let num = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0', ".", "="]]

for (let i = 0; i < 4; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {

    row.push(<TouchableOpacity style={styles.btn} onPress={() => addScreen(num[i][j])} >
      <Text style={styles.btnText} >{num[i][j]}</Text>
    </TouchableOpacity>);
  }

  rows.push(<View style={styles.row}>{row}</View>)

}



let oprBtn = [];
let opr = ['+', '-', '*', '/']


for (let i = 0; i < 4; i++) {

  oprBtn.push(<TouchableOpacity style={styles.btn} onPress={() => addScreen(opr[i])} >
    <Text style={styles.btnText} >{opr[i]}</Text>
  </TouchableOpacity>);
}






return (
  <View style={styles.container}>

    <View style={styles.result}>
      <Text style={styles.calText} >{screenValue}</Text>
    </View>
    <View style={styles.calculations}>
      <Text style={styles.calText} >{result}</Text>
    </View>
    <View style={styles.btn}>
      <View style={styles.numbers}>

        {rows}


      </View>
      <View style={styles.operators}>
        <TouchableOpacity style={styles.btn} onPress={() => setScreenValue(screenValue.slice(0, screenValue.length - 1))} >
          <Text style={styles.btnText} >DEL</Text>
        </TouchableOpacity>
        {oprBtn}
      </View>
    </View>



    <StatusBar style="light" />
  </View>

);
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  calText: {
    color: "white",
    fontSize: 40
  },
  btnText: {
    fontSize: 35,
    color: 'white'
  },
  result: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculations: {
    flex: 1,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  btn: {
    flex: 4,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',

  },
  numbers: {
    flex: 3,
    backgroundColor: '#4444'
  },
  operators: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#b70b0b',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'

  }



});
