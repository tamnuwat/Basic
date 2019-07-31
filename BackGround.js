import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { LinearGradient } from 'expo'

export default class App extends React.Component {
  render() {
    return (

      <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{flex: 1}}
      >
      </LinearGradient>
    );
  }
}