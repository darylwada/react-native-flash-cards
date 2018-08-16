import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Button, ScrollView } from 'react-native'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      question: '',
      answer: '',
      editing: null
    }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  handleEditClick(i) {
    if (this.state.editing) return
    const { question, answer } = this.props.screenProps.savedCards[i]
    this.setState({ question, answer, editing: i })
  }

  handleEditSubmit(i) {
    const { question, answer } = this.state
    const newCard = { question, answer}
    this.props.screenProps.handleEditSubmit(newCard, i)
    this.setState({ editing: null })
  }

  handleDeleteClick(i) {

  }

  render() {
    const { editing } = this.state
    const $cards = this.props.screenProps.savedCards.map((card, i) => {
      if (i === editing) {
        return (
          <View style={styles.card} key={i}>
            <TextInput 
              style={styles.questionInput}
              onChangeText={question => this.setState({ question })}
              value={this.state.question}
            />
            <TextInput 
              style={styles.answerInput}
              onChangeText={answer => this.setState({ answer })}
              value={this.state.answer}
            />
            <View style={styles.button}>
              <Button
                onPress={() => this.handleEditSubmit(i)}
                title="Save"
                color="white"
              />
            </View>
        </View>
        )
      }
      return (
        <View style={styles.card} key={i}>
          <Text style={styles.question}>{card.question}</Text>
          <Text style={styles.answer}>{card.answer}</Text>
          <View style={styles.buttons}>
            <TouchableHighlight onPress={() => this.handleEditClick(i)} underlayColor="white">
              <Text style={styles.edit}>{'\uf044'}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.handleDeleteClick(i)} underlayColor="white">
              <Text style={styles.delete}>{'\uf2ed'}</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    })

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {$cards}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    justifyContent: 'flex-start'
  },
  question: {
    marginTop: 2,
    fontSize: 20,
    paddingHorizontal: 10
  },
  answer: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  edit: {
    fontFamily: 'awesome',
    marginRight: 10,
    color: 'rgb(108, 209, 165)'
  },
  delete: {
    fontFamily: 'awesome',
    marginRight: 10,
    color: 'rgb(108, 209, 165)'
  },
  questionInput: {
    marginTop: 2,
    fontSize: 20,
    paddingHorizontal: 10,
    borderColor: 'rgb(211,211,211)', 
    borderWidth: 1
  },
  answerInput: {
    marginTop: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'rgb(211,211,211)', 
    borderWidth: 1
  },
  button: {
    marginTop: 20,
    width: 60,
    marginLeft: '50%',
    transform: [{ translateX: -30 }],
    justifyContent: 'center',
    backgroundColor: 'rgb(23,41,61)',
    borderRadius: 5
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
