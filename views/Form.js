import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleSave = this.handleSave.bind(this)
  }

  handleSave() {
    const { question, answer } = this.state
    const newCard = { question, answer}
    this.props.handleSave(newCard)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.header}>Create a Flash Card</Text>
          <Text style={styles.label}>Question</Text>
          <TextInput 
            style={{height: 30, width: 250, borderColor: 'gray', borderWidth: 1}}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <Text style={styles.label}>Answer</Text>
          <TextInput 
            style={{height: 30, width: 250, borderColor: 'gray', borderWidth: 1}}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <View style={styles.button}>
            <Button
              onPress={this.handleSave}
              title="Save"
              color="white"
            />
          </View>
        </View>
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
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgb(23,41,61)',
    borderRadius: 5
  }
})
