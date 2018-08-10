import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class List extends React.Component {
  render() {
    const $cards = this.props.screenProps.savedCards.map((card, i) => {
      return (
        <View style={styles.card} key={i}>
          <Text style={styles.question}>{card.question}</Text>
          <Text style={styles.answer}>{card.answer}</Text>
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
    minHeight: 100,
    marginTop: 20,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.1,
    justifyContent: 'center'
  },
  question: {
    marginTop: 2,
    fontSize: 20,
    paddingHorizontal: 10
  },
  answer: {
    paddingVertical: 10,
    paddingHorizontal: 15
  }
})
