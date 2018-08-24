import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default function EmptyList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>You have no cards!</Text>
        <View style={styles.button}>
          <TouchableHighlight onPress={() => navigation.navigate('New Card')}>
            <Text style={styles.buttonText}>Make One</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(233, 236, 239)',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: 300,
    height: 250,
    marginTop: 20,
    shadowColor: 'gray',
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: -3,
      height: 3
    },
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginBottom: 25
  },
  button: {
    justifyContent: 'center',
    marginTop: 20,
    width: 75,
    height: 30,
    backgroundColor: 'rgb(23,41,61)',
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
})
