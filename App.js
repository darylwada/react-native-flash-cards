import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Form from './views/Form'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form></Form>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(233, 236, 239)',
    alignItems: 'center',
  }
})
