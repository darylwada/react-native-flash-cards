import React from 'react'
import { StyleSheet, View } from 'react-native'
import Form from './views/Form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedCards: []
    }
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(newCard) {
    const savedCards = [...this.state.savedCards, newCard]
    this.setState({ savedCards })
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <Form savedCards={this.state.savedCards} handleSave={this.handleSave}></Form>
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
