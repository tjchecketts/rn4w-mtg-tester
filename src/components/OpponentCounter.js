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
        <Text style={{ fontSize: 20 }}>
          Opponent's Life: {this.state.value}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Button 
            title='-3'
            onPress={this.minusThree}
          />
          <Button 
            title='-2'
            onPress={this.minusTwo}
          />
          <Button 
            title='-1'
            onPress={this.minusOne}
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
      </View>
    )
  }
}

export default OpponentCounter;