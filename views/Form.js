import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
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
            onPress={event => this.setState({ })}
            title="Save"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
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
});
