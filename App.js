import React from 'react'
import NewCard from './views/NewCard'
import Cards from './views/Cards'
import Practice from './views/Practice'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { AsyncStorage } from 'react-native'
import Expo, { Font } from 'expo'

const Navigator = createMaterialTopTabNavigator(
  {
    'New Card': { screen: NewCard },
    Cards: { screen: Cards },
    Practice: { screen: Practice }
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
    },
    swipeEnabled: false
  }
)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      savedCards: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment in which is was declared.' 
        },
        {
          question: 'What is the time complexity of a binary search?',
          answer: 'O(log n)' 
        },
        {
          question: 'What are the six falsy values in JavaScript?',
          answer: "false, 0, '', null, undefined, NaN" 
        },
      ]
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