import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { LinearGradient } from 'expo'

export default class App extends React.Component {
  render() {
    return (

      <LinearGradient
        //https://uigradients.com/#Reef
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'white'}} />
          <View style={{flex: 10, backgroundColor: 'skyblue'}} >
               <TextInput style={styles.txtIn1}></TextInput>

               <TextInput style={styles.txtIn1} placeholder="Type Password Here"></TextInput>

               <TextInput style={styles.txtIn2} placeholder="Type Password Here" secureTextEntry ={true}></TextInput>

               <TextInput style={styles.txtIn2} placeholder="Type Password Here" secureTextEntry ={true} inlineImageLeft ='password.png'></TextInput>

          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txtIn1: {
    alignItems: 'center',
    height:50,
    backgroundColor: 'white',
    padding: 10,
    margin:10
  },

   txtIn2:{
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },

})