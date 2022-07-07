/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import NewModuleButton from './NewModuleButton';

const App = () => {

  const [count,setCount]=useState(0);

  const onDecrement=()=>{
      setCount(count-1);
  }

  const onIncrement=()=>{
    setCount(count+1);
  }

  return (
    <View style={styles.container}>


      <NewModuleButton/>

  <Text style={{fontSize:60,marginBottom:50}}>{count}</Text>

<View style={{flexDirection:'row'}}>
  <TouchableOpacity 
   style={styles.button}
   onPress={onIncrement}>
    <Text style={{fontSize:20}}>Increase</Text>
  </TouchableOpacity>

  <TouchableOpacity
   style={styles.button}
   onPress={onDecrement}
  >
    <Text style={{fontSize:20}}>Decrease</Text>
  </TouchableOpacity>
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
  },
  button:{
    margin:10,
    borderColor:'#A52A2A',
    borderWidth:3,
    padding:12,
    borderRadius:10,
    backgroundColor:'#ADD8E6',
    
  }
});

export default App;
