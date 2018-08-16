import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function EmptyList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>You have no cards!</Text>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate('New Card')}
            title="Make One"
            color="white"
          />
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
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginBottom: 25
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgb(23,41,61)',
    borderRadius: 5
  }
})
