import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { negs, pos } from '../utils/index';

class LifeCounter extends React.Component {
  state = { value: 20 }
  
  setHealth = (amount) => {
    this.setState({ value: this.state.value + amount })
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}>
          Your Life: {this.state.value}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          { negs.map( (i) => {
            return (
              <Button 
                key={i} 
                title={`${i}`}
                onPress={() => {this.setHealth(i)}}
              />
            )
          })}
          { pos.map( (i) => {
            return (
              <Button 
                key={i} 
                title={`+${i}`}
                onPress={() => {this.setHealth(i)}}
              />
            )
          })}
        </View>
      </View>
    )
  }
}

export default LifeCounter;