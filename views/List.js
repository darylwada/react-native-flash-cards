import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default class List extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     savedCards: []
  //   }
  // }

  render() {
    console.log(this.props.screenProps.savedCards)
    const $cards = this.props.screenProps.savedCards.map(card => {
      return (
        <View style={styles.card}>
          <Text style={styles.label}>Question</Text>
          <Text style={styles.label}>{card.question}</Text>
          <Text style={styles.label}>Answer</Text>
          <Text style={styles.label}>{card.answer}</Text>
        </View>
      )
    })
    return (
      <View style={styles.container}>
        {$cards}
      </View>
    )
  }
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
    marginTop: 50,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginBottom: 25
  },
  label: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 25
  }
})
