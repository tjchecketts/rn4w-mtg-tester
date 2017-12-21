import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BackgroundImage from '/Users/tjchecketts/Desktop/my-projects/rn4w-mtg-tester/BackgroundImage.js';
import LifeCounter from '/Users/tjchecketts/Desktop/my-projects/rn4w-mtg-tester/src/components/LifeCounter.js';
import OpponentCounter from '/Users/tjchecketts/Desktop/my-projects/rn4w-mtg-tester/src/components/OpponentCounter.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      {/* can use flex box to move around the buttons */}
        <Text style={styles.title}>Magic the Gathering</Text>
        <Text style={styles.subTitle}>Life Counter</Text>
        <LifeCounter />
        <OpponentCounter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'firebrick',
    fontWeight: 'bold',
    fontSize: 40,
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'firebrick',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
