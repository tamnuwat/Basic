import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
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
          <View style={{flex: 1}} />

          <View style={{flex: 2,alignItems : 'center'}} >
              <Image
                style={styles.img1}
                source={{ uri: 'https://sv1.picz.in.th/images/2019/07/31/KrlRfn.png' }}/>
          </View>


          <View style={{flex: 2}} >
              <TextInput style={styles.txtIn2} placeholder="UserName" ></TextInput>
              <TextInput style={styles.txtIn2} placeholder="Password " secureTextEntry ={true}></TextInput>
          </View>

          <View style={{flex: 3}} >
              <TouchableOpacity style={styles.btn}><Text style={{textAlign : 'center', fontSize :20, color:'#ffffff'}}>OK</Text></TouchableOpacity>
          </View>
          
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  img1: {
    justifyContent:'center',
    margin:10,
    objectFit:'cover',
    width: 100, 
    height: 100 
  },
 txtIn2:{
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },
 
   btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },

})