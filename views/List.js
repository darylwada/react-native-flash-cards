import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Button } from 'react-native'

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

  render() {
    const { editing } = this.state
    const $cards = this.props.screenProps.savedCards.map((card, i) => {
      const $question = i === editing
        ? <TextInput 
            style={styles.input}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
        : <Text style={styles.question}>{card.question}</Text>
      const $answer = i === editing
        ? <TextInput 
            style={styles.input}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        : <Text style={styles.answer}>{card.answer}</Text>
      const $edit = i === editing
        ? <View style={styles.button}>
            <Button
              onPress={() => this.handleEditSubmit(i)}
              title="Save"
              color="white"
            />
          </View>
        : <TouchableHighlight onPress={() => this.handleEditClick(i)} underlayColor="white">
           <Text style={styles.edit}>{'\uf044'}</Text>
          </TouchableHighlight>
      return (
        <View style={styles.card} key={i}>
          {$question}
          {$answer}
          {$edit}
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
  },
  edit: {
    fontFamily: 'awesome',
    marginLeft: '90%',
    color: 'rgb(108, 209, 165)'
  },
  input: {
    height: 30,
    width: 250, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgb(23,41,61)',
    borderRadius: 5
  }
})
