import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class OpponentCounter extends React.Component {
  state = { value: 20 }
  
  minusThree = () => {
    this.setState({ value: this.state.value - 3 })
  }

  minusTwo = () => {
    this.setState({ value: this.state.value - 2 })
  }

  minusOne = () => {
    this.setState({ value: this.state.value - 1 })
  }

  plusOne = () => {
    this.setState({ value: this.state.value + 1 })
  }

  plusTwo = () => {
    this.setState({ value: this.state.value + 2 })
  }

  plusThree = () => {
    this.setState({ value: this.state.value + 3 })
  }

  render() {
    return (
      <View>
        <Text>Opponent's Life: {this.state.value}</Text>
        <Button 
          title='-3'
          onPress={this.minusThree}
          color="#841584"
        />
        <Button 
          title='-2'
          onPress={this.minusTwo}
        />
        <Button 
          title='-1'
          onPress={this.minusOne}
          style={{backgroundColor: "#841584"}}
        />
        <Button 
          title='+1'
          onPress={this.plusOne}
        />
        <Button 
          title='+2'
          onPress={this.plusTwo}
        />
        <Button 
          title='+3'
          onPress={this.plusThree}
        />
      </View>
    )
  }
}

export default OpponentCounter;