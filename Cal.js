import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo'

export default class App extends React.Component {
  render() {
    return (

      <LinearGradient
        //https://uigradients.com/#Reef
        colors={['#000000', '#000000', '#000000']}
        style={{flex: 1}}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1}} />

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1,  backgroundColor: 'powderblue'}} />
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: '#f45676'}} />
              <View style={{flex: 1,  backgroundColor: '#568491'}} />
              <View style={{flex: 1,  backgroundColor: '#88ff99'}} />
              <View style={{flex: 1,  backgroundColor: '#ff3322'}} />
          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 1,  backgroundColor: '#55ff11'}} />
              <View style={{flex: 1, backgroundColor: '#773344'}} />
              <View style={{flex: 1,  backgroundColor: '#2255ff'}} />
              <View style={{flex: 1,  backgroundColor: '#22ff11'}} />
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: '#551f1f'}} />
              <View style={{flex: 1,  backgroundColor: '#65f21f'}} />
              <View style={{flex: 1,  backgroundColor: '#f45676'}} />
              <View style={{flex: 1,  backgroundColor: '#ff3322'}} />
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              
              <View style={{flex: 2,  backgroundColor: '#88ff99'}} />
              <View style={{flex: 1,  backgroundColor: '#ff3322'}} />
              <View style={{flex: 1,  backgroundColor: '#551f1f'}} />
          </View>



        
          
        </View>
      </LinearGradient>
    );
  }
}

