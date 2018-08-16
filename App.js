import React from 'react'
import Form from './views/Form'
import List from './views/List'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { AsyncStorage } from 'react-native'
import Expo, { Font } from 'expo'

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
          backgroundColor: '#fff'
      },
      indicatorStyle: {
          backgroundColor: 'rgb(108, 209, 165)'
      },
      tabStyle: {
        height: 70,
        paddingTop: 30
      }
    }
  }
)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      savedCards: [{ question: 'hello?', answer: 'hi' }]
    }
    this.handleSave = this.handleSave.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    AsyncStorage
      .getItem('savedCards')
      .then(savedCards => {
        if (savedCards) this.setState({ savedCards: JSON.parse(savedCards) })
      })
    Font
      .loadAsync({
        'awesome': require('./assets/fonts/fontawesome.ttf')
      })
      .then(() => this.setState({ loading: false }))
  }

  handleSave(newCard) {
    const savedCards = [...this.state.savedCards, newCard]
    AsyncStorage.setItem('savedCards', JSON.stringify(savedCards))
    this.setState({ savedCards })
  }

  handleEditSubmit(editedCard, editIndex) {
    const savedCards = this.state.savedCards.map((card, index) => {
      if (index === editIndex) return editedCard
      return card
    })
    AsyncStorage.setItem('savedCards', JSON.stringify(savedCards))
    this.setState({ savedCards })
  }

  handleDelete(i) {
    const savedCards = [...this.state.savedCards]
    savedCards.splice(i, 1)
    AsyncStorage.setItem('savedCards', JSON.stringify(savedCards))
    this.setState({ savedCards })
  }

  render() {
    console.log(this.state)
    if (this.state.loading) return <Expo.AppLoading />
    return (
      <Navigator 
        screenProps={{ 
          savedCards: this.state.savedCards, 
          handleSave: this.handleSave,
          handleEditSubmit: this.handleEditSubmit,
          handleDelete: this.handleDelete
        }} />
    )
  }
}