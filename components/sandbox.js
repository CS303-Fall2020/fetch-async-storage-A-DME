import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#333'
  },
  boxOne: {
    backgroundColor: 'violet',
    padding: 10,
    flex: 5
  },
  boxTwo: {
    backgroundColor: 'gold',
    padding: 20,
    flex: 1
  },
  boxThree: {
    backgroundColor: 'coral',
    padding: 30,
    flex: 1
  },
  boxFour: {
    backgroundColor: 'skyblue',
    padding: 40,
    flex: 1
  }
});
