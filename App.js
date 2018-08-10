import React from 'react'
import { StyleSheet, View } from 'react-native'
import Form from './views/Form'
import Nav from './components/Nav'
import List from './views/List'
import { createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator(
  {
    new: Form,
    list: List,
  },
  {
    initialRouteName: 'new',
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'new',
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
    return <RootStack />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(233, 236, 239)',
    alignItems: 'center',
  }
})
