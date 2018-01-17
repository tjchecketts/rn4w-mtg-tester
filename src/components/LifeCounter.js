import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
          <Button 
            title='-3'
            onPress={() => {this.setHealth(-3)}}
          />
          <Button 
            title='-2'
            onPress={() => {this.setHealth(-2)}}
          />
          <Button 
            title='-1'
            onPress={() => {this.setHealth(-1)}}
          />
          <Button 
            title='+1'
            onPress={() => {this.setHealth(+1)}}
          />
          <Button 
            title='+2'
            onPress={() => {this.setHealth(+2)}}
          />
          <Button 
            title='+3'
            onPress={() => {this.setHealth(+3)}}
          />
        </View>
      </View>
    )
  }
}

export default LifeCounter;