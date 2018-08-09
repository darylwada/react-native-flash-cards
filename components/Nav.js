import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.brand}>Quiz Me</Text>
        <Text style={styles.nav}>Cards</Text>
        <Text style={styles.nav}>New Card</Text>
        <Text style={styles.nav}>Practice</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 75,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  brand: {
    padding: 5,
    fontSize: 20,
    color: 'rgb(108, 209, 165)'
  },
  nav: {
    padding: 5,
    color: 'rgb(108, 209, 165)'
  }
})