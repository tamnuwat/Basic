import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
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
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 10, backgroundColor: 'skyblue'}} >
                <Button   title="Btn1" />

                <TouchableOpacity style={styles.btn2}><Text style={styles.txt2}>btn2</Text></TouchableOpacity>

                <TouchableOpacity style={styles.btn3}><Text>btn3</Text></TouchableOpacity>

                <TouchableOpacity style={styles.btn4}><Text style={styles.txt4}>btn4</Text></TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  btn2: {
    alignItems: 'center',
    height:50,
    backgroundColor: '#3b5998',
    padding: 10,
    margin:10
  },
  
  txt2:{
    textAlign:'center',
    color:"#ffffff"
  },

  btn3:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#3b5998',
      padding: 10,
      margin:10,
      borderRadius: 50
  },

   btn4:{
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },

  txt4:{
      textAlign:'center',
      color:"#ffffff"
  }

})