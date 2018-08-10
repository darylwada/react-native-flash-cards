import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default class List extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Card List</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 300,
    height: 250,
    marginTop: 50,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // hidden: {
  //   display: none
  // },
  header: {
    marginBottom: 25
  },
  label: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 25
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgb(23,41,61)',
    borderRadius: 5
  }
})
