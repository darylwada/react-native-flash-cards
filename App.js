import React from 'react'
import Form from './views/Form'
import List from './views/List'
import { createMaterialTopTabNavigator } from 'react-navigation';



const Navigator = createMaterialTopTabNavigator(
  {
    'New Card': { screen: Form },
    Cards: { screen: List },
  },
  {
    tabBarOptions: {
      activeTintColor: 'rgb(108, 209, 165)',
      inactiveTintColor: 'gray',
      style: {
          backgroundColor: '#fff',
      },
      indicatorStyle: {
          backgroundColor: 'rgb(108, 209, 165)',
      },
    }
  }
)

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
      <Navigator screenProps={{ savedCards: this.state.savedCards, handleSave: this.handleSave }} />
    )
  }
}