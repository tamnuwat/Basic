import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
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
          <View style={{flex: 10,alignItems : 'center'}} >
              <Image
                style={styles.img1}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}/>

          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  img1: {
    justifyContent:'center',
    padding: 10,
    margin:10,
    width: 50, 
    height: 50 
  },

 

})