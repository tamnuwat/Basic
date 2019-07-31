import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Blink text='Welcome to React' />
        <Button title = 'ok' Color ="#841584"/>
      </View>
    );
  }
}