import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LifeCounter from '/Users/tjchecketts/Desktop/my-projects/magic-life-rn4w/src/components/LifeCounter.js';
import OpponentCounter from '/Users/tjchecketts/Desktop/my-projects/magic-life-rn4w/src/components/OpponentCounter.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Magic the Gathering</Text>
        <Text>Life Counter</Text>
        <LifeCounter />
        <OpponentCounter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
